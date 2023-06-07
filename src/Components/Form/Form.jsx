import React, { useState, useEffect } from "react";
import db from "../../../firebase.js";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart } from "react-google-charts";

ChartJS.register(ArcElement, Tooltip, Legend);

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [apiKey, setApiKey] = useState(
    // INSERT YOUR USDA API KEY HERE
  );
  const [mealIngredientsArray, setMealIngredientsArray] = useState([]);
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

  const [pieDataNew, setPieDataNew] = useState([]);
  const [pieDataOld, setPieDataOld] = useState([]);
  const [diffData, setDiffData] = useState({});

  const [calories, setCalories] = useState(0);
  const [oldCalories, setOldCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  const navigate = useNavigate();

  // Startup Login Check
  useEffect(() => {
    async function checkIfUserExists() {
      const userId = localStorage.getItem("email");

      // Pull from firebase to see if user exists
      const userIdsDocRef = doc(db, "users", userId);
      const docSnap = await getDoc(userIdsDocRef);
      if (docSnap.data() == undefined) {
        console.log("User not found");
        navigate("/login");
        window.location.reload();
      }
    }
    checkIfUserExists();
  }, []);

  // Miscellaneous items for the pie chart
  const colorForPieChart = {
    carbohydrates: "#245dff",
    protein: "#e0c342",
    fat: "#ff4766",
  };

  const changePieDataNewDefault = () => {
    var data = [
      ["Type", "Item"],
      ["Protein", 0],
      ["Fat", 0],
      ["Carbohydrates", 0.1],
    ];
    setPieDataNew(data);
  };

  const changePieDataOldDefault = () => {
    var data = [
      ["Type", "Item"],
      ["Protein", 0],
      ["Fat", 0],
      ["Carbohydrates", 0.1],
    ];
    setPieDataOld(data);
  };

  // Pie Chart Options
  const chartOptions = {
    width: "100%",
    height: "130px",
    legend: "none",
    pieSliceText: "none",
    backgroundColor: "transparent",
    chartArea: { width: "100%", height: "90%" },
    slices: {
      0: { color: colorForPieChart.protein },
      1: { color: colorForPieChart.fat },
      2: { color: colorForPieChart.carbohydrates },
      3: { color: colorForPieChart.protein }, // more slices for inner slices
      4: { color: colorForPieChart.fat },
      5: { color: colorForPieChart.carbohydrates },
    },
  };

  // formatting numbers
  const formatNumDisplay = (num) => {
    if (num == null) {
      return 0;
    }

    return parseFloat(parseFloat(num).toFixed(2));
  };

  const formatPercDisplay = (num1, num2, num3) => {
    if (num1 == null) {
      return 0;
    }
    
    var totalNum = parseFloat(num1) + parseFloat(num2) +parseFloat(num3);
    var num = (num1/totalNum)*100;

    return parseFloat(parseFloat(num).toFixed(0));
  };

  // Modal functions
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Fetch all meals from firebase
  const fetchAllMeals = async () => {
    const username = localStorage.getItem("email");

    const allMealsSnapshot = await getDocs(
      collection(db, "users", username, "all_meals")
    );

    const allMealsFromFirebase = await allMealsSnapshot.docs.map((doc) =>
      doc.data()
    );
    console.log("All user meals fetched!");
    console.log(allMealsFromFirebase);

    const loggedMealsSnapshot = await getDocs(
      collection(db, "users", username, "logged_meals")
    );
    const loggedMeals = loggedMealsSnapshot.docs.map((doc) => doc.data());

    console.log("All user logged meals fetched!");
    console.log(loggedMeals);

    setAllMeals(allMealsFromFirebase);

    // Now update the numbers
    // get all the meals eaten today from logged meals
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const today = new Date().toLocaleDateString("en-US", {
      timeZone: userTimeZone,
    });

    const [month, day, year] = today.split("/"); // Assuming the default format is MM/DD/YYYY
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    // console.log(formattedDate);
    let totalCaloriesSum = 0;
    let totalProteinSum = 0;
    let totalFatSum = 0;
    let totalCarbsSum = 0;

    const mealsToday = [];
    loggedMeals.forEach((meal) => {
      // add today's meals
      if (meal.datestamp === formattedDate) {
        mealsToday.push(meal);
        console.log("today", mealsToday);
        const totalcalories = meal.totalcalories;
        totalCaloriesSum += totalcalories;
        totalProteinSum += meal.totalmacros.protein;
        totalFatSum += meal.totalmacros.fat;
        totalCarbsSum += meal.totalmacros.carbs;
      }
    });

    console.log("totalCaloriesSum", totalCaloriesSum);
    console.log("totalProteinSum", totalProteinSum);
    console.log("totalFatSum", totalFatSum);
    console.log("totalCarbsSum", totalCarbsSum);

    // Change the data for the pie chart if all of them are non zeros
    if (totalProteinSum != 0 || totalFatSum != 0 || totalCarbsSum != 0) {
      var data = [
        ["Type", "Item"],
        ["Protein", totalProteinSum],
        ["Fat", totalFatSum],
        ["Carbohydrates", totalCarbsSum],
      ];

      setPieDataOld(data);
      setPieDataNew(data);
    }

    // Now change the calories too
    setCalories(totalCaloriesSum);
    setOldCalories(totalCaloriesSum);

    // Now change the macros
    setProtein(totalProteinSum);
    setFat(totalFatSum);
    setCarbohydrates(totalCarbsSum);
  };

  if (allMeals.length == 0) {
    fetchAllMeals();
  }

  // Handle auto selection
  const suggestOptions = (event) => {
    if (mealName == "") {
      setSuggestedMeals([]);
      return;
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
      if (
        !alreadyInFilteredOptions &&
        option.name.toLowerCase().includes(mealName.toLowerCase())
      ) {
        filteredOptions.push(option);
      }
    }
    console.log(filteredOptions);
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
        amount: ingredient.amount,
        servingUnit: ingredient.servingUnit,
        borderColor: { borderColor: randomHexColor() },
      });
    });

    console.log("Updating ingredients array...");
    setMealIngredientsArray(ingredients_arr);

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

  const handleRemoveSuggestedMeals = () => {
    setSuggestedMeals([]);
  };

  const handleAddMeal = (e, option) => {
    // First set modal to be true
    setModalOpen(true);

    // Set modal data
    setModalData(option);
  };


  // Always change pie data when meal ingredients array changes
  function changeHeaderData(item) {

    // Add the macronutrients and calories
    var totalCaloriesSum = calories;
    var totalProteinSum = protein;
    var totalFatSum = fat;
    var totalCarbsSum = carbohydrates;

    // Add the last item in the meal ingredients array to the pie chart
    totalCaloriesSum += item.calories;
    totalProteinSum += item.protein;
    totalFatSum += item.fat;
    totalCarbsSum += item.carbohydrates;

    // Change the data for the pie chart if all of them are non zeros
    if (totalProteinSum != 0 || totalFatSum != 0 || totalCarbsSum != 0) {
      var data = [
        ["Type", "Item"],
        ["Protein", totalProteinSum],
        ["Fat", totalFatSum],
        ["Carbohydrates", totalCarbsSum],
      ];

      setPieDataNew(data);
    }

    // Now change the calories and macros
    setCalories(totalCaloriesSum);
    setProtein(totalProteinSum);
    setFat(totalFatSum);
    setCarbohydrates(totalCarbsSum);

  };

  function deleteIngredient(item) {
    // Remove the item from the meal ingredients array
    var mealArray = [...mealIngredientsArray];

    // Find the index of the item
    var index = mealArray.indexOf(item);

    if (index > -1) {
      mealArray.splice(index, 1);
    }

    // Now we need to update everything
    setMealIngredientsArray(mealArray);


    // Change item data to negative
    item.calories = -item.calories;
    item.protein = -item.protein;
    item.fat = -item.fat;
    item.carbohydrates = -item.carbohydrates;

    changeHeaderData(item);
  };




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
    var mealArray = [...mealIngredientsArray];

    // Check to see if the serving size unit is grams or not
    var servingSizeData = null;
    var servingUnit = null;

    if (option.servingSizeUnit == "g" || option.servingSizeUnit == "ml") {
      servingSizeData = option.servingSize * modalMultiplier;
      servingUnit = option.servingSizeUnit;
    } else {
      servingSizeData = modalMultiplier;
    }

    console.log(modalMultiplier);
    console.log(typeof modalMultiplier);
    console.log(servingSizeData);
    console.log(typeof servingSizeData);

    // Now we add the object to the meal array, with multiplier
    var nutritionObject = {
      name: foodName,
      calories: parseFloat((calories * modalMultiplier).toFixed(2)),
      carbohydrates: parseFloat((carbohydrates * modalMultiplier).toFixed(2)),
      protein: parseFloat((protein * modalMultiplier).toFixed(2)),
      fat: parseFloat((fat * modalMultiplier).toFixed(2)),
      amount: parseFloat(servingSizeData.toFixed(2)),
      servingUnit: servingUnit,
      borderColor: { borderColor: randomHexColor() },
    };

    mealArray.push(nutritionObject);

    console.log(mealArray);

    setMealIngredientsArray(mealArray);
    changeHeaderData(nutritionObject);

    // Now we change the state of the check box and CLEAR the options
    setTimeout(() => {
      setOptions([]);
      setSearchQuery("");
    }, 300);
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
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date().toLocaleDateString("en-US", {
      timeZone: userTimeZone,
    });

    const [month, day, year] = date.split("/"); // Assuming the default format is MM/DD/YYYY
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    // Now we need to get the meal ingredients
    var ingredients = [];
    var totalcalories = 0;
    var totalmacros = {
      carbs: 0,
      protein: 0,
      fat: 0,
    };

    for (var i = 0; i < mealIngredientsArray.length; i++) {
      // Check if serving unit is null
      var servingUnit = "";

      if (mealIngredientsArray[i].servingUnit != null) {
        servingUnit = mealIngredientsArray[i].servingUnit;
      }

      const ingredient = {
        name: mealIngredientsArray[i].name,
        macros: {
          carbs: mealIngredientsArray[i].carbohydrates,
          protein: mealIngredientsArray[i].protein,
          fat: mealIngredientsArray[i].fat,
        },
        amount: mealIngredientsArray[i].amount,
        servingUnit: servingUnit,
        calories: mealIngredientsArray[i].calories,
      };

      ingredients.push(ingredient);

      // Update total counts
      totalcalories += ingredient.calories;
      totalmacros.carbs += ingredient.macros.carbs;
      totalmacros.protein += ingredient.macros.protein;
      totalmacros.fat += ingredient.macros.fat;
    }

    // Construct final submission object
    const submission = {
      name: name,
      ingredients: ingredients,
      totalcalories: parseFloat(totalcalories.toFixed(2)),
      totalmacros: totalmacros,
      favmeal: favMeal,
      datestamp: formattedDate,
    };

    const submissionWithoutDate = {
      name: name,
      ingredients: ingredients,
      totalcalories: parseFloat(totalcalories.toFixed(2)),
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
    const docRefLogged = await addDoc(userRerLoggedMeals, submission);

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

  // Always change diff data when pie data changes
  useEffect(() => {
    console.log("Pie Data Changed");
    setDiffData({
      old: pieDataOld,
      new: pieDataNew,
    });
  }, [pieDataNew, pieDataOld]);
    

  return (
    <div className="overallForm">
      {/* Modal */}
      {modalOpen ? (
        <div className="modal-item">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{modalData.description}</h2>
            {modalData.brandOwner ? <h6>{modalData.brandOwner}</h6> : ""}
            <p></p>
            {modalData.servingSize && modalData.servingSizeUnit ? (
              <p>
                {modalData.servingSize} {modalData.servingSizeUnit} per serving
              </p>
            ) : (
              <p> No serving size/unit data aviailable</p>
            )}
            <p></p>
            <input
              type="number"
              className="modal-search-input"
              value={modalMultiplier || ""}
              onChange={(e) => setModalMultiplier(parseFloat(e.target.value))}
              placeholder={
                modalData.servingSize && modalData.servingSizeUnit
                  ? "Enter your serving size here"
                  : "Enter your amount here"
              }
            />
            <button
              className={
                modalSubmit.toLowerCase() === "Add to meal".toLowerCase()
                  ? "slimPossibleSubmit"
                  : "slimPossibleSubmitted"
              }
              onClick={addItemToMeal}
            >
              {" "}
              {modalSubmit}{" "}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {errorMessages.length > 0
        ? errorMessages.map((x, idx) => (
            <p className="errorMessage" key={idx}>
              {x}
            </p>
          ))
        : ""}

      <Link className="ret_home" to="/">
        <img id="ret_home_img"></img>
      </Link>

      <div className="form-header">
          {pieDataNew.length != 0 && pieDataOld.length != 0 ? (
            <div id="calories_and_macro_graph">
              <Chart
                chartType="PieChart"
                diffdata={diffData}
                options={chartOptions}
                id="calories_and_macro_graph"
              />
            </div>
          ) : (
            ""
          )}

          <div className="form_info">
            <div className="form_info_item">
              <h3>Calories: </h3>
              <p>{formatNumDisplay(calories)} kcal</p>
            </div>
            <div className="form_info_item">
              <h3 style={{ color: colorForPieChart.carbohydrates }}>Carbs:</h3>
              <p>{formatPercDisplay(carbohydrates, fat, protein)} %</p>
            </div>
            <div className="form_info_item">
              <h3 style={{ color: colorForPieChart.fat }}>Fat: </h3>
              <p>{formatPercDisplay(fat, carbohydrates, protein)} %</p>
            </div>
            <div className="form_info_item">
              <h3 style={{ color: colorForPieChart.protein }}>Protein: </h3>
              <p>{formatPercDisplay(protein, fat, carbohydrates)} %</p>
            </div>
          </div>
        </div>

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
              <div>
                {" "}
                {option.favmeal ? "❤️" : ""} {option.name}{" "}
              </div>
              <h4> {option.totalcalories || option.totalcalories} kcal </h4>
            </div>
          ))}
        </div>

        {suggestedMeals.length > 0 ? (
          <button
            className="option-meal-suggested-close-button"
            onClick={handleRemoveSuggestedMeals}
          >
            x
          </button>
        ) : (
          ""
        )}

        <div className="searchBar">
          <input
            type="text"
            data-testid="ingredient-search-input"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Ingredient name, brand name(optional)"
          />
          <button
            className="searchIngredient"
            data-testid="ingredient-search-button"
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
            onClick={() => deleteIngredient(ingredient)}
          >
            <h2>{ingredient.name}:</h2>
            <p>{ingredient.calories} kcal</p>
          </div>
        ))}
      </div>
      <div className="search-results">
        {options.map(function (option) {
          const Nutrients = option.foodNutrients;
          const totalCalories = Nutrients.reduce(
            (sum, num) => sum + num.value,
            0
          );
          let mapNutrients = {};
          for (let i = 0; i < Nutrients.length; i++) {
            let foodType = Nutrients[i].nutrientName;
            let cal_ = Nutrients[i].value;

            if (foodType == "Protein") {
              mapNutrients[foodType] = (cal_ / totalCalories) * 1000;
            }
            if (foodType == "Total lipid (fat)") {
              mapNutrients["Fat"] = (cal_ / totalCalories) * 100;
            }
            if (foodType == "Carbohydrate, by difference") {
              mapNutrients["Carbohydrate"] = (cal_ / totalCalories) * 1000;
            }
          }

          const data = {
            labels: Object.keys(mapNutrients),
            datasets: [
              {
                label: "# of Calories",
                data: Object.values(mapNutrients),
                backgroundColor: ["#e0c342", "#ff4766", "#245dff"],
                borderColor: "black",
                borderWidth: 1,
              },
            ],
          };

          const config = {
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 15,
                  },
                  usePointStyle: true,
                },
                position: "right",
              },
            },
          };

          return (
            <div
              key={option.fdcId}
              className="search-result-card"
              onClick={(e) => handleAddMeal(e, option)}
            >
              <div className="src-title">
                {option.brandOwner != null && option.brandOwner != "" ? (
                  <p>{titleCase(option.description)}</p>
                ) : (
                  <p>{titleCase(option.description)}</p>
                )}
                {option.brandOwner != null && option.brandOwner != "" ? (
                  <p className="brandName">{option.brandOwner}</p>
                ) : (
                  ""
                )}
              </div>
              <h2 className="total-calories">
                Total Calories: {Math.floor(totalCalories)}
              </h2>

              <div className="ingredient-Composition-Chart-form">
                <Pie data={data} options={config} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchForm;
