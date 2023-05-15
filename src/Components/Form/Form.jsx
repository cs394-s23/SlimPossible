import React, { useState, useEffect } from "react";
import db from "../../../firebase.js";
import { collection, doc, getFirestore, addDoc } from "firebase/firestore";
import "./Form.css";
import { Link } from "react-router-dom";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [apiKey, setApiKey] = useState(
    "7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG"
  );
  const [mealIngredientsArray, setMealArray] = useState([]);
  const [mealName, setMealName] = useState("");
  const [favMeal, setFavMeal] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [submitButton, setSubmitButton] = useState("submit");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear all options before
    setOptions([]);
    setErrorMessages([]);
    // Get food data
    getFoodData();
  };

  const randomHexColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Pull data from USDA Search API
  const getFoodData = () => {
    if (searchQuery === "") {
      let messages = [...errorMessages];
      let newErrorMessage = "The search query can't be empty!";
      messages.push(newErrorMessage);
      setErrorMessages(messages);
      return;
    }
    // Search for the query
    console.log("Searching for: " + searchQuery);

    const tempQuery = searchQuery.split(", ");
    const foodName = tempQuery[0];
    var brandName = tempQuery[1];

    if (brandName == null) {
      brandName = "";
    }

    const params = new URLSearchParams({
      api_key: apiKey,
      query: foodName,
      pageSize: 10,
      pageNumber: 1,
      brandOwner: brandName,
    });

    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?${params}`)
      .then((response) => response.json())
      .then((data) => {
        // Parse in the data
        console.log(data);
        console.log(data.foods);
        setOptions(data.foods);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addItemToMeal = (e, option) => {
    // Now extract the data from the option
    const foodName = option.description;
    var calories = 0;
    var carbohydrates = 0;
    var protein = 0;
    var fat = 0;

    // Find the corresponding nutrient values
    option.foodNutrients.forEach((nutrient) => {
      switch (nutrient.nutrientName) {
        case "Energy":
          calories = nutrient.value;
          break;
        case "Carbohydrate, by difference":
          carbohydrates = nutrient.value;
          break;
        case "Protein":
          protein = nutrient.value;
          break;
        case "Total lipid (fat)":
          fat = nutrient.value;
          break;
        default:
          break;
      }
    });

    // Set the meal array now
    var mealArray = mealIngredientsArray;

    var nutritionObject = {
      name: foodName,
      calories: calories,
      carbohydrates: carbohydrates,
      protein: protein,
      fat: fat,
      borderColor: { borderColor: randomHexColor() },
    };

    mealArray.push(nutritionObject);

    setMealArray(mealArray);

    console.log(mealArray);

    // Now we change the state of the check box and CLEAR the options
    setTimeout(() => {
      e.target.checked = false;
      setOptions([]);
      setSearchQuery("");
    }, 1000);
  };

  async function submitFormToFirebase(e) {
    // Now we submit the form to firebase
    // First we need to get the user id
    const userId = localStorage.getItem("email");

    // form validation
    if (mealName == "") {
      let messages = [...errorMessages];
      let newErrorMessage = "The meal name can't be empty!";
      messages.push(newErrorMessage);
      setErrorMessages(messages);
      return;
    }

    if (!isNaN(mealName)) {
      let messages = [...errorMessages];
      let newErrorMessage = "The meal name must be a string!";
      messages.push(newErrorMessage);
      setErrorMessages(messages);
      return;
    }

    if (searchQuery == "") {
      return;
    }

    const name = mealName;
    // Now we need to get the current date
    const date = new Date();

    // Now we need to get the meal ingredients
    var ingredients = [];
    var totalCalories = 0;
    var totalmacros = {
      carbs: 0,
      protein: 0,
      fat: 0,
    };

    for (var i = 0; i < mealIngredientsArray.length; i++) {
      const ingredient = {
        name: mealIngredientsArray[i].name,
        macros: {
          carbs: mealIngredientsArray[i].carbohydrates,
          protein: mealIngredientsArray[i].protein,
          fat: mealIngredientsArray[i].fat,
        },
        grams: 0,
        calories: mealIngredientsArray[i].calories,
      };

      ingredients.push(ingredient);

      // Update total counts
      totalCalories += ingredient.calories;
      totalmacros.carbs += ingredient.macros.carbs;
      totalmacros.protein += ingredient.macros.protein;
      totalmacros.fat += ingredient.macros.fat;
    }

    // Construct final submission object
    const submission = {
      name: name,
      ingredients: ingredients,
      totalCalories: totalCalories,
      totalmacros: totalmacros,
      favmeal: favMeal,
      date: date,
    };

    const submissionWithoutDate = {
      name: name,
      ingredients: ingredients,
      totalCalories: totalCalories,
      totalmacros: totalmacros,
      favmeal: favMeal,
    };

    // Now we need to submit the data to firebase
    // Find user document first, then add to the subarray
    const userRef = doc(db, "users", userId);
    const userRefAllMeals = collection(userRef, "all_meals");
    const userRerLoggedMeals = collection(userRef, "logged_meals");

    await setSubmitButton("submitting...");

    const docRefAll = await addDoc(userRefAllMeals, submission);
    const docRefLogged = await addDoc(
      userRerLoggedMeals,
      submissionWithoutDate
    );

    await setSubmitButton("submitted!");

    // wait 1 second
    await setTimeout(() => {
      console.log("Delayed for 1 seconds");
      window.location.href = "/";
    }, "1000");
  }

  // helper
  var titleCase = function (string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="overallForm">
      {errorMessages.length > 0
        ? errorMessages.map((x, idx) => (
            <p key={idx} style={{ color: "red" }}>
              {x}
            </p>
          ))
        : ""}

      <Link className="ret_home" to="/">
        <img id="ret_home_img" src="src/components/homepage/home.png"></img>
      </Link>

      <form className="submitForm" onSubmit={handleSubmit}>
        <button
          className={
            submitButton === "submit"
              ? "slimPossibleSubmit"
              : ".slimPossibleSubmitted"
          }
          onClick={submitFormToFirebase}
        >
          {submitButton}
        </button>

        <input
          className="meal-input"
          name="name"
          placeholder="Your meal name"
          onChange={(e) => setMealName(e.target.value)}
          value={mealName}
          required
        />

        <div className="searchBar">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Ingredient name, brand name(optional)"
          />
          <button
            className="searchIngredient"
            type="submit"
            onClick={handleSubmit}
          >
            🔎
          </button>
        </div>
        <div className="favMeal">
          <p> ✨ Favourite Meal? </p>
          <input
            className="fav_meal"
            type="checkbox"
            value={favMeal}
            onChange={(e) => setFavMeal(e.target.checked)}
          />
        </div>
      </form>
      <div className="ingredient-options">
        {mealIngredientsArray.map((ingredient) => (
          <div
            key={ingredient.name}
            className="ingredient-option"
            style={ingredient.borderColor}
          >
            <h2>{ingredient.name}:</h2>
            <p>{ingredient.calories} kcal</p>
          </div>
        ))}
      </div>
      <div className="search-results">
        {options.map((option) => (
          <div key={option.fdcId} className="search-result-card">
            <div className="src-title">
              <h3>{titleCase(option.description)}</h3>
              <input
                id="mealCheckBox"
                type="checkbox"
                onChange={(e) => addItemToMeal(e, option)}
              ></input>
            </div>

            <div className="sr-each">
              <div className="search-result-each">
                <h2>Brand:</h2>
                <p>{option.brandOwner}</p>
              </div>
              <div className="search-result-each">
                <h2>Calories:</h2>
                <p>{option.foodNutrients[3].value}</p>
              </div>
              <div className="search-result-each">
                <h2>Protein:</h2>
                <p>{option.foodNutrients[0].value}</p>
              </div>
              <div className="search-result-each">
                <h2>Fat:</h2>
                <p>{option.foodNutrients[1].value}</p>
              </div>
              <div className="search-result-each">
                <h2>Carbs:</h2>
                <p>{option.foodNutrients[2].value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
