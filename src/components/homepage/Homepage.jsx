import "./Homepage.css";
import { useLocation } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import db from "../../..//firebase.js";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { DbTitle } from "../../..//firebase.js";
import Block from "./Block";
import B_select from "./B_select";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // 1. State variables initialization
  const [calories, setCalories] = useState(0);
  const [oldCalories, setOldCalories] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);

  const [blocks, setBlocks] = useState([]);
  // const [todayMeals, setTodayMeals] = useState([]);

  const [pieDataNew, setPieDataNew] = useState([]);
  const [pieDataOld, setPieDataOld] = useState([]);
  const [diffData, setDiffData] = useState({});

  const [caloriesFetched, setCaloriesFetched] = useState(false);
  const [dineOptions, setDineOptions] = useState([]);

  const [collectionName, setCollectionName] = useState(DbTitle);
  const [recMeals, setRecMeals] = useState([]);
  const [filteredMeals, setFilterInfo] = useState([]);
  const [allMeals, setAllMeals] = useState([]);

  const [totalDailyCalories, setTotalDailyCalories] = useState();
  const [renderSubmitBtn, setRenderSubmitBtn] = useState(false);

  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [recommendedMealSelected, setRecommendedMealSelected] = useState(false);
  const [recommendedMealName, setRecommendedMealName] = useState();

  const [submitButton, setSubmitButton] = useState("submit");

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

  const colorForPieChart = {
    carbohydrates: "#245dff",
    protein: "#e0c342",
    fat: "#ff4766",
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

  // Fetch data from firebase
  // Counting calories for all meals in logged_meal right now, NEED TO CONSIDER LOGGED_DATES LATER
  const Fetchdata = async () => {
    console.log("FETCHING DATA FROM FIREBASE");
    const username = localStorage.getItem("email");

    try {
      const AlamMealsSnapshot = await getDocs(collection(db, "AlamData"));
      const AlamMeals = AlamMealsSnapshot.docs.map((doc) => doc.data());

      const allMealsSnapshot = await getDocs(
        collection(db, "users", username, "all_meals")
      );
      const allMeals = allMealsSnapshot.docs.map((doc) => doc.data());

      const loggedMealsSnapshot = await getDocs(
        collection(db, "users", username, "logged_meals")
      );
      const loggedMeals = loggedMealsSnapshot.docs.map((doc) => doc.data());

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

      // add the macros up too
      setBlocks(mealsToday);

      // Change the data for the pie chart if all of them are non zeros
      if (totalProteinSum != 0 && totalFatSum != 0 && totalCarbsSum != 0) {
        var data = [
          ["Type", "Item"],
          ["Protein", totalProteinSum],
          ["Fat", totalFatSum],
          ["Carbohydrates", totalCarbsSum],
        ];

        setPieDataOld(data);
        setPieDataNew(data);
      }

      // console.log("Total Calories Sum:", totalCaloriesSum);
      return {
        allMeals: allMeals,
        totalCaloriesSum: totalCaloriesSum,
        AlamMeals: AlamMeals,
      };
    } catch (error) {
      console.log(error);
    }
  };

  // need to go through logged meals and get all meals matching today's date
  const recommendMeals = (allMeals, totalCaloriesSum, AlamMeals) => {
    var validMeals = [];
    console.log("Daily Calories");
    console.log(totalDailyCalories);

    const remainingCalories = totalDailyCalories - totalCaloriesSum;
    const dailyAverageGlobal = 1000;

    var benchmarkCalories = dailyAverageGlobal;

    if (dailyAverageGlobal > remainingCalories) {
      benchmarkCalories = remainingCalories;
    }
    console.log("alam data", AlamMeals);

    // 1. Added smart recommendation method here
    // - Filter either by just remaining calories
    // - Or, it if it is next meal, then we just use a lower calorie count
    if (Array.isArray(allMeals)) {
      if (allMeals.length < 5) {
        AlamMeals.forEach((meal) => {
          if (meal.totalcalories <= remainingCalories + 300) {
            validMeals.push(meal);
          }
        });
      } else {
        console.log("allmeals", allMeals);
        console.log(remainingCalories);
        allMeals.forEach((meal) => {
          if (meal.totalcalories <= remainingCalories) {
            validMeals.push(meal);
          }
        });
        console.log("valid", validMeals);
      }
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function removeDuplicates(array) {
      let uniqueArray = [];
      for (let i = 0; i < array.length; i++) {

        let contains = false;

        for (let j = 0; j < uniqueArray.length; j++) {
          if (array[i].name.toLowerCase() === uniqueArray[j].name.toLowerCase()) {
            contains = true;
          }
        }

        if (!contains) {
          uniqueArray.push(array[i]);
        }
      }
      return uniqueArray;
    }

    validMeals = removeDuplicates(validMeals);
    const randomizedValidMeals = shuffleArray(validMeals);
    const slicedValidMeals = randomizedValidMeals.slice(0, 3);
    setFilterInfo(slicedValidMeals);
    setDineOptions(filteredMeals);
  };

  // 4. Some Helper Functions
  const handleSelect = (selectedIndex, e) => {
    // NOTE: Carousel rerenders on every change
    console.log("Carousel is changing...");
    setIndex(selectedIndex);
  };

  // logout
  const handleLogOut = (event) => {
    localStorage.clear();
    window.location.reload();
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

  function mealOptionChange(newData) {
    console.log("Checking new data input");
    console.log(newData);
    console.log(Object.keys(newData).length === 0);

    var data = {};

    var protein = 0;
    var fat = 0;
    var carbohydrates = 0;
    var calories = 0;
    var name = null;
    var oldCaloriesParsed = oldCalories;

    // Old calories parsing
    if (oldCaloriesParsed == null || oldCaloriesParsed == undefined) {
      oldCaloriesParsed = 0;
    }

    // If the box was unchecked
    if (Object.keys(newData).length === 0) {
      console.log("Changing to old data");

      // Change back to old meal data
      protein = pieDataOld[1][1];
      fat = pieDataOld[2][1];
      carbohydrates = pieDataOld[3][1];
      calories = oldCaloriesParsed;

      setRenderSubmitBtn(false);
    } else {
      console.log("Changing to new data");

      // Change meal data
      // 1. Get all calories
      protein = pieDataOld[1][1] + newData.protein;
      fat = pieDataOld[2][1] + newData.fat;
      carbohydrates = pieDataOld[3][1] + newData.carbohydrates;
      calories = newData.calories + oldCaloriesParsed;
      name = newData.name;

      setRenderSubmitBtn(true);
    }

    // 2. Change the pie chart data withe the previous data values as well
    data = [
      ["Type", "Item"],
      ["Protein", protein],
      ["Fat", fat],
      ["Carbohydrates", carbohydrates],
    ];

    // 3. Set new data, needs to account for possible 0's here
    console.log("Protein: ", protein);
    console.log("Fat: ", fat);
    console.log("Carbohydrates: ", carbohydrates);
    console.log("Calories: ", calories);

    if (protein != 0) {
      protein = protein.toFixed(2);
    }

    if (fat != 0) {
      fat = fat.toFixed(2);
    }

    if (carbohydrates != 0 && carbohydrates != 0.1) {
      carbohydrates = carbohydrates.toFixed(2);
    }

    if (calories != undefined && calories != 0) {
      calories = calories.toFixed(2);
    }

    setProtein(protein);
    setFat(fat);
    setCarbohydrates(carbohydrates);
    setCalories(calories);

    setPieDataNew(data); // diff data will change automatically in the useEffect

    // Only when there are no names typed
    if (
      recommendedMealName == null ||
      recommendedMealName == undefined ||
      recommendedMealName == ""
    ) {
      setRecommendedMealName(name);
    }
  }

  // Function to fetch data from the database regarding user daily calorie goal
  const fetchCalorieGoal = async () => {
    try {
      setCaloriesFetched(true);
      const userId = localStorage.getItem("email");
      const userRef = doc(db, "users", userId);

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        console.log("No such document!");
        return;
      }

      const user = userSnap.data();

      if (user.daily_calorie_goal == null) {
        console.log("User daily calorie goal is null");
        return;
      }

      console.log("User daily calorie goal: ", user.daily_calorie_goal);
      setTotalDailyCalories(parseInt(user.daily_calorie_goal));
    } catch (error) {
      console.log(error);
    }
  };

  // Function to update the database with the new calorie goal
  const updateCalorieGoal = async () => {
    if (totalDailyCalories == null) {
      console.log("Total daily calories is null");
      return;
    }

    try {
      const userId = localStorage.getItem("email");
      const userRef = doc(db, "users", userId);

      console.log("Updating data base with calorie goal: ", totalDailyCalories);

      const userSnap = await updateDoc(userRef, {
        daily_calorie_goal: parseInt(totalDailyCalories),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update the calorie goal, and also fetch data on startup after this is finished
  // NOTE: On recommendation selection, refresh page automatically to update the data
  useEffect(() => {
    console.log("UDPATING CALORIES GOALS");
    updateCalorieGoal();

    console.log("CALORIES FINISHED FETCHING");
    fetchMealsAndData();
  }, [totalDailyCalories]);

  // 5. Pie Chart Data
  const options = {
    width: "100%",
    height: "160px",
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

  if (window.innerWidth <= 768) {
    options.height = "130px";
    options.chartArea.width = "90%";
  }

  function fetchMealsAndData() {
    if (pieDataNew.length == 0) {
      changePieDataNewDefault();
    }

    if (pieDataOld.length == 0) {
      changePieDataOldDefault();
    }

    setCaloriesFetched(false);
    // uncomment later
    Fetchdata().then(({ allMeals, totalCaloriesSum, AlamMeals }) => {
      // Save all meals here
      setAllMeals(allMeals);

      // Data fetched, now call recommendMeals
      recommendMeals(allMeals, totalCaloriesSum, AlamMeals);
    });
  }

  useEffect(() => {
    console.log("ALL MEALS UPDATED");
    console.log(allMeals);
  }, [allMeals]);

  // Start up, fetch the calorie goal
  useEffect(() => {
    fetchCalorieGoal();
  }, []);

  // Always change diff data when pie data changes
  useEffect(() => {
    console.log("Pie Data Changed");
    setDiffData({
      old: pieDataOld,
      new: pieDataNew,
    });
  }, [pieDataNew, pieDataOld]);

  useEffect(() => {
    console.log("Diffdata Changed");
    console.log(diffData);
  }, [diffData]);

  // Render the variables by extracting data from the blocks
  useEffect(() => {
    if (blocks.length != 0) {
      var protein = 0;
      var fat = 0;
      var carbohydrates = 0;
      var calories = 0;

      blocks.forEach((block, index) => {
        block.ingredients.forEach((ingredient, index) => {
          protein += ingredient.macros.protein;
          fat += ingredient.macros.fat;
          carbohydrates += ingredient.macros.carbs;
          calories += ingredient.calories;
        });
      });
    }

    // Set the state variables here
    setOldCalories(calories);
    setCalories(calories);
    setProtein(protein);
    setFat(fat);
    setCarbohydrates(carbohydrates);
  }, [blocks]);

  // Change dining options
  useEffect(() => {
    setDineOptions(filteredMeals);
  }, [filteredMeals]);

  // submit meal option
  async function handleSubmit(e, obj) {
    // Submit data to firebase
    // Date format: YYYY-MM-DD
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const date = new Date().toLocaleDateString("en-US", {
      timeZone: userTimeZone,
    });

    const [month, day, year] = date.split("/"); // Assuming the default format is MM/DD/YYYY
    const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    // Now we get the data from the meals
    // Must change meal name to a custom one
    const mealName = recommendedMealName;
    const mealIngredients = obj.ingredients;
    const mealCalories = obj.totalcalories;
    const mealMacros = obj.totalmacros;
    const mealFavMeal = obj.favmeal;

    // Now we submit the data to firebase
    const userId = localStorage.getItem("email");
    const userRef = doc(db, "users", userId);
    const userRefAllMeals = collection(userRef, "all_meals");
    const userRerLoggedMeals = collection(userRef, "logged_meals");

    // if (mealFavMeal.hasOwnProperty('count')) {
    //   mealFavMeal.count = mealFavMeal.count + 1
    //} else {
    //  mealFavMeal = {isFavorite: obj.favmeal, count: 1}
    // }

    // Check items in ingredients
    mealIngredients.forEach((ingredient) => {
      if (ingredient.servingUnit == null) {
        ingredient.servingUnit = "";
      }
    });

    const submission = {
      name: mealName,
      ingredients: mealIngredients,
      totalcalories: mealCalories,
      totalmacros: mealMacros,
      date: formattedDate,
      favmeal: mealFavMeal,
      datestamp: formattedDate,
    };

    console.log(submission);

    await setSubmitButton("submitting...");

    const docRefAll = await addDoc(userRefAllMeals, submission);
    const docRefLogged = await addDoc(userRerLoggedMeals, submission); // TODO: Change flash submit issue here

    await setSubmit(true);
    await setSubmitButton("submitted!");

    // Refetch all the data again
    setTimeout(() => {
      fetchMealsAndData();

      // Now reset the button
      // setDineOptions([]);
      // await setRecommendedMealSelected(true);
      setRecommendedMealName("");
      setSubmitButton("submit");
      setRenderSubmitBtn(false);
      setSubmit(false);
    }, 1000);
  }

  return (
    <div className="homepage">
      <div className="upper">
        <div className="header">
          {pieDataNew.length != 0 && pieDataOld.length != 0 ? (
            <div id="calories_and_macro_graph">
              <Chart
                chartType="PieChart"
                diffdata={diffData}
                options={options}
                id="calories_and_macro_graph"
              />
            </div>
          ) : (
            ""
          )}

          <div className="info">
            <div className="info_item">
              <h3>Calories: </h3>
              <p>{formatNumDisplay(calories)} kcal</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.carbohydrates }}>Carbs:</h3>
              <p>{formatPercDisplay(carbohydrates, fat, protein)} %</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.fat }}>Fat: </h3>
              <p>{formatPercDisplay(fat, carbohydrates, protein)} %</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.protein }}>Protein: </h3>
              <p>{formatPercDisplay(protein, fat, carbohydrates)} %</p>
            </div>
          </div>
        </div>
        <div className="calorie_goal">
          <input
            type="number"
            value={totalDailyCalories || ""}
            placeholder="Enter Your Calorie Goal Today (kcal)..."
            onChange={(e) => setTotalDailyCalories(e.target.value)}
          />
        </div>
      </div>

      <div className="content">
        {blocks.map((obj, index) => (
          <Block key={index} block={obj} />
        ))}
      </div>

      {dineOptions.length == 0 ? (
        <h3 className="dinner-recs-heading">
          {" "}
          No meals available, daily calorie goal exceeded
        </h3>
      ) : (
        <div className="carousel-section">
          {!recommendedMealSelected ? (
            <div className="recommendation-section">
              <div className="recommendation-seperator"></div>
              <h3 className="dinner-recs-heading"> Meal Recommendations:</h3>
              <input
                type="text"
                placeholder="New Meal Name"
                value={recommendedMealName ? recommendedMealName : ""}
                onChange={(e) => setRecommendedMealName(e.target.value)}
              ></input>
            </div>
          ) : (
            ""
          )}

          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            slide="false"
            interval={null}
            touch="true"
          >
            {dineOptions.map((obj, index) => (
              <Carousel.Item key={index}>
                <B_select
                  key={index}
                  option={obj}
                  tryMealOption={mealOptionChange}
                />
                {renderSubmitBtn ? (
                  <Carousel.Caption>
                    <button
                      onClick={(e) => handleSubmit(e, obj)}
                      className={
                        submit ? "slimPossibleSubmitted" : "slimPossibleSubmit"
                      }
                    >
                      {submitButton}
                    </button>
                  </Carousel.Caption>
                ) : (
                  ""
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}

      <Link
        className="exit-app"
        to="/login"
        onClick={handleLogOut}
        style={{ marginTop: "10px" }}
      >
        <img className="add_img"></img>
      </Link>
      <Link className="form_add" to="/form">
        <img id="add_img"></img>
      </Link>
    </div>
  );
};

export default Homepage;
