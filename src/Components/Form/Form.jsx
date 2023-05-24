import React, { useState, useEffect } from "react";
import db from "../../../firebase.js";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore";
import "./Form.css";
import { Link, useLocation } from "react-router-dom";

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
  const [submitButton, setSubmitButton] = useState("Submit");
  const [allMeals, setAllMeals] = useState([]);

  const [suggestedMeals, setSuggestedMeals] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalMultiplier, setModalMultiplier] = useState();
  const [modalSubmit, setModalSubmit] = useState("Add to meal");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const fetchAllMeals = async () => {
    const username = localStorage.getItem("email");

    const allMealsSnapshot = await getDocs(
      collection(db, "users", "user1", "all_meals")
    );

    const allMealsFromFirebase = await allMealsSnapshot.docs.map((doc) => doc.data());
    console.log("All user meals fetched!");
    console.log(allMealsFromFirebase);

    setAllMeals(allMealsFromFirebase);
  };

  if (allMeals.length == 0) {
    fetchAllMeals();
  }


  // Handle auto selection
  const suggestOptions = (event) => { 

    if (mealName == ""){
      setSuggestedMeals([]);
      return
    }

    var filteredOptions = [];

    for (var i = 0; i < allMeals.length; i++) {
      var option = allMeals[i];

      // Check to see if option is already in filterdOptions, check names
      var alreadyInFilteredOptions = false;
      for (var j = 0; j < filteredOptions.length; j++) {
        var filteredOption = filteredOptions[j];

        if (filteredOption.name == option.name) {
          alreadyInFilteredOptions = true;
          break;
        }
      }

      // Check to see if the name is included in the meal name
      if (!alreadyInFilteredOptions && option.name.toLowerCase().includes(mealName.toLowerCase())) {
        filteredOptions.push(option);
      }
    }

    setSuggestedMeals(filteredOptions);
  };

  function handleOptionClick(option) {
    // Reset all the inputs
    setMealName(option.name);
    setSuggestedMeals([]);

    console.log("Option clicked!");
    console.log(option);

    // Add ingredients to the ingredients list
    var ingredients_arr = [];
    option.ingredients.forEach((ingredient) => {

      var servingSize = "n/a"; // default serving size, we may need to change this

      // Check if the serving size is null, if they are, set them to ""
      if (ingredient.grams != null) {
        servingSize = ingredient.grams;
      }


      ingredients_arr.push({
        name: ingredient.name,
        calories: ingredient.calories,
        carbohydrates: ingredient.macros.carbs,
        protein: ingredient.macros.protein,
        fat: ingredient.macros.fat,
        grams: servingSize,
        borderColor: { borderColor: randomHexColor() },
      });
    });

    console.log("Updating ingredients array...")
    setMealArray(ingredients_arr);

    // Check to see if meal is a favorite meal
    if (option.favmeal) {
      setFavMeal(true);
    }
  }


  // Handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear all options before
    setOptions([]);
    setErrorMessages([]);
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
      pageSize: 50,
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

  const handleAddMeal = (e, option) => {
    // First set modal to be true
    setModalOpen(true);

    // Set modal data
    setModalData(option);
  }

  // Add the ingredient to the meal submit form
  const addItemToMeal = () => {

    var option = modalData;

    // Rest modal data
    setModalData({});
    setModalOpen(false);
    setModalSubmit("Add to meal");
    setModalMultiplier(null);

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

    // Now we add the object to the meal array, with multiplier
    var nutritionObject = {
      name: foodName,
      calories: calories * modalMultiplier,
      carbohydrates: carbohydrates * modalMultiplier,
      protein: protein * modalMultiplier,
      fat: fat * modalMultiplier,
      grams: option.servingSize * modalMultiplier,
      borderColor: { borderColor: randomHexColor() },
    };

    mealArray.push(nutritionObject);

    setMealArray(mealArray);

    console.log(mealArray);

    // Now we change the state of the check box and CLEAR the options
    setTimeout(() => {
      setOptions([]);
      setSearchQuery("");
    }, 500);
  };

  async function submitFormToFirebase(e) {
    // Now we submit the form to firebase
    // First we need to get the user id
    const userId = localStorage.getItem("email");
    console.log("Submitting to firebase for user: " + userId);

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
        grams: mealIngredientsArray[i].grams,
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

    console.log("Submitting the following data:");
    console.log(submission);

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

      {modalOpen ? (
        <div className="modal-item">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{modalData.description}</h2>
            {
              modalData.brandOwner ? 
                (<h6>{modalData.brandOwner}</h6>) 
                : 
                ("")
            }
            <p></p>
            {
              modalData.servingSize && modalData.servingSizeUnit ?
                (<p>{modalData.servingSize} {modalData.servingSizeUnit} per serving</p>)
                :
                (<p> No serving size/unit data aviailable</p>)
            }
            <p></p>
            <input
              type="number"
              className="modal-search-input"
              value={modalMultiplier || ""}
              onChange={(e) => setModalMultiplier(e.target.value)}
              placeholder="Enter your serving size here"
            />
            <button
              className={
                modalSubmit.toLowerCase() === "Add to meal".toLowerCase()
                  ? "slimPossibleSubmit"
                  : "slimPossibleSubmitted"
              }
              onClick={addItemToMeal}

              > {modalSubmit} </button>

          </div>
        </div>
      ):("")}


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
            submitButton.toLowerCase() === "Submit".toLowerCase()
              ? "slimPossibleSubmit"
              : "slimPossibleSubmitted"
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
          onKeyUp={suggestOptions}
          value={mealName}
          required
        />
        <div id={mealName === "" ? "" : "dropdown-menu"}>
          {suggestedMeals.map((option, ind) => (
            <div
              key={ind}
              className="option-meal-suggested"
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>

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
            onClick={getFoodData}
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
          <div key={option.fdcId} className="search-result-card" onClick={(e) => handleAddMeal(e, option)}>
            <div className="src-title">
              {option.brandOwner != null && option.brandOwner != "" ? (
                <h3>{titleCase(option.description)}</h3>
              ) : (
                <h3 style={{ width: "68%" }}>
                  {titleCase(option.description)}
                </h3>
              )}
              {option.brandOwner != null && option.brandOwner != "" ? (
                <p>{option.brandOwner}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchForm;
