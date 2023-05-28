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

  const colorForPieChart = {
    carbohydrates: "#245dff",
    protein: "#e0c342",
    fat: "#ff4766",
  };

  // Fetch data from firebase
  // Counting calories for all meals in logged_meal right now, NEED TO CONSIDER LOGGED_DATES LATER
  const Fetchdata = async () => {
    console.log("FETCHING DATA FROM FIREBASE");
    const username = localStorage.getItem("email");

    try {
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
        const totalcalories = meal.totalcalories;
        totalCaloriesSum += totalcalories;
        totalProteinSum += meal.totalmacros.protein;
        totalFatSum += meal.totalmacros.fat;
        totalCarbsSum += meal.totalmacros.carbs;
        // add today's meals
        if (meal.datestamp === formattedDate) {
          mealsToday.push(meal);
        }
      });

      // add the macros up too
      setBlocks(mealsToday);

      // Change the data for the pie chart
      var data = [
        ["Type", "Item"],
        ["Protein", totalProteinSum],
        ["Fat", totalFatSum],
        ["Carbohydrates", totalCarbsSum],
      ];

      setPieDataOld(data);
      setPieDataNew(data);

      // console.log("Total Calories Sum:", totalCaloriesSum);
      return { allMeals: allMeals, totalCaloriesSum: totalCaloriesSum };
    } catch (error) {
      console.log(error);
    }
  };

  // need to go through logged meals and get all meals matching today's date
  const recommendMeals = (allMeals, totalCaloriesSum) => {
    const validMeals = [];
    console.log("Daily Calories");
    console.log(totalDailyCalories);
    const remainingCalories = totalDailyCalories - totalCaloriesSum;
    if (Array.isArray(allMeals)) {
      allMeals.forEach((meal) => {
        if (meal.totalcalories <= remainingCalories) {
          validMeals.push(meal);
        }
      });
    }

    const slicedValidMeals = validMeals.slice(0, 3);
    setFilterInfo(slicedValidMeals);
    setDineOptions(filteredMeals);
  };

  // 4. Some Helper Functions
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // logout
  const handleLogOut = (event) => {
    localStorage.clear();
    window.location.reload();
  };

  const changePieDataNew = () => {
    var data = [
      ["Type", "Item"],
      ["Protein", 0],
      ["Fat", 0],
      ["Carbohydrates", 1],
    ];
    setPieDataNew(data);
  };

  const changePieDataOld = () => {
    var data = [
      ["Type", "Item"],
      ["Protein", 0],
      ["Fat", 0],
      ["Carbohydrates", 1],
    ];
    setPieDataOld(data);
  };

  function mealOptionChange(newData) {
    setRenderSubmitBtn(!renderSubmitBtn);

    var data = {};

    var protein = 0;
    var fat = 0;
    var carbohydrates = 0;
    var calories = 0;

    // If the box was unchecked
    if (Object.keys(newData).length === 0) {
      data = pieDataOld;

      protein = pieDataOld[1][1];
      fat = pieDataOld[2][1];
      carbohydrates = pieDataOld[3][1];
      calories = oldCalories;
    } else {
      // Change meal data
      // 1. Get all calories
      protein = pieDataOld[1][1] + newData.protein;
      fat = pieDataOld[2][1] + newData.fat;
      carbohydrates = pieDataOld[3][1] + newData.carbohydrates;
      calories = newData.calories + oldCalories;

      // 2. Change the pie chart data withe the previous data values as well
      var data = [
        ["Type", "Item"],
        ["Protein", protein],
        ["Fat", fat],
        ["Carbohydrates", carbohydrates],
      ];
    }

    // 3. Set new data
    setProtein(protein.toFixed(2));
    setFat(fat.toFixed(2));
    setCarbohydrates(carbohydrates.toFixed(2));
    setCalories(calories.toFixed(2));

    setPieDataNew(data); // diff data will change automatically in the useEffect
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

    if (caloriesFetched) {
      console.log("CALORIES FINISHED FETCHING");
      fetchMealsAndData();
    }
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
    if (pieDataNew.length == 0){
      changePieDataNew();
    }

    if (pieDataOld.lenthg == 0){
      changePieDataOld();
    }
    
    setCaloriesFetched(false);
    // uncomment later
    Fetchdata().then(({ allMeals, totalCaloriesSum }) => {
      // Save all meals here
      setAllMeals(allMeals);

      // Data fetched, now call recommendMeals
      recommendMeals(allMeals, totalCaloriesSum);
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
      setDiffData({
        old: pieDataOld,
        new: pieDataNew,
  });
  }, [pieDataNew, pieDataOld]);

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

    // Change diff data here as well


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
    const mealName = obj.name;
    const mealIngredients = obj.ingredients;
    const mealCalories = obj.totalCalories;
    const mealMacros = obj.totalMacros;
    const mealFavMeal = obj.favMeal;

    // Now we submit the data to firebase
    const userId = localStorage.getItem("email");
    const userRef = doc(db, "users", userId);
    const userRefAllMeals = collection(userRef, "all_meals");
    const userRerLoggedMeals = collection(userRef, "logged_meals");

    const submission = {
      name: mealName,
      ingredients: mealIngredients,
      calories: mealCalories,
      macros: mealMacros,
      date: formattedDate,
      favMeal: mealFavMeal,
      datestamp: formattedData
    }

    const docRefAll = await addDoc(userRefAllMeals, submission);
    const docRefLogged = await addDoc(userRerLoggedMeals, submission);

    await setSubmit(!submit);

    // Now remove all the dinner options
    setDineOptions([]);
    setRecommendedMealSelected(true);
  };

  useEffect(() => {
    console.log(diffData);
  },[diffData]);

  return (
    <div className="homepage">
      <div className="upper">
        <div className="header">
          {
            pieDataNew.length != 0 && pieDataOld.length != 0 ? 
            (
            <div id="calories_and_macro_graph">
              <Chart
                chartType="PieChart"
                diffdata={diffData}
                options={options}
                id="calories_and_macro_graph"
              />
            </div>
          ):
            ("")
          }

          <div className="info">
            <div className="info_item">
              <h3>Calories: </h3>
              <p>{calories}</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.carbohydrates }}>
                Carbohydrates:
              </h3>
              <p>{carbohydrates} g</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.fat }}>Fat: </h3>
              <p>{fat} g</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.protein }}>Protein: </h3>
              <p>{protein} g</p>
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

        {
          !recommendedMealSelected ? 
          (<h3 className="dinner-recs-heading">Dinner recommendations:</h3>)
          :
          ("")
        }

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide="false"
          interval={null}
          touch="true"
        >
          {dineOptions.map((obj, index) => (
            <Carousel.Item>
              <B_select
                key={index}
                option={obj}
                tryMealOption={mealOptionChange}
              />
              {renderSubmitBtn ? (
                <Carousel.Caption>
                  {submit ? (
                    <button
                      onClick={(e) => handleSubmit(e, obj)}
                      className="slimPossibleSubmitted"
                    >
                      submitted!
                    </button>
                  ) : (
                    <button
                      className="slimPossibleSubmit"
                      onClick={(e) => handleSubmit(e, obj)}
                    >
                      submit
                    </button>
                  )}
                </Carousel.Caption>
              ) : (
                ""
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Link
        className="exit-app"
        to="/login"
        onClick={handleLogOut}
        style={{ marginTop: "10px" }}
      >
        <img className="add_img" src="src/components/homepage/exit.png"></img>
      </Link>
      <Link className="form_add" to="/form">
        <img id="add_img" src="src/components/homepage/add.png"></img>
      </Link>
    </div>
  );
};

export default Homepage;
