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

  const [pieDataNew, setPieDataNew] = useState({});
  const [pieDataOld, setPieDataOld] = useState({});
  const [diffData, setDiffData] = useState({});

  const [dataFetched, setDataFetched] = useState(false);
  const [dineOptions, setDineOptions] = useState([]);

  const [collectionName, setCollectionName] = useState(DbTitle);
  const [recMeals, setRecMeals] = useState([]);
  const [filteredMeals, setFilterInfo] = useState([]);
  const [allMeals, setAllMeals] = useState([]);

  const [totalDailyCalories, setTotalDailyCalories] = useState();
  const [renderSubmitBtn, setRenderSubmitBtn] = useState(false);

  const colorForPieChart = {
    carbohydrates: "#245dff",
    protein: "#e0c342",
    fat: "#ff4766",
  };

  // 2. Fake data
  var block1 = {
    title: "Breakfast",
    ingredients: [
      {
        emoji: "🍞",
        name: "Bread",
        num: 100,
        calories: 267,
        protein: 8,
        fat: 3,
        carbohydrates: 51,
        unit: "g",
      },
      {
        emoji: "🥚",
        name: "Egg",
        num: 200,
        calories: 310,
        protein: 26,
        fat: 23,
        carbohydrates: 2,
        unit: "g",
      },
    ],
  };

  var block2 = {
    title: "Lunch",
    ingredients: [
      {
        emoji: "🍔",
        name: "Beef Patty",
        num: 1,
        calories: 250,
        protein: 20,
        fat: 20,
        carbohydrates: 0,
        unit: "serving",
      },
      {
        emoji: "🍟",
        name: "French Fries",
        num: 150,
        calories: 312,
        protein: 4,
        fat: 15,
        carbohydrates: 42,
        unit: "g",
      },
      {
        emoji: "🥤",
        name: "Soda",
        num: 1,
        calories: 150,
        protein: 0,
        fat: 0,
        carbohydrates: 39,
        unit: "can",
      },
    ],
  };

  var choice1 = {
    emoji: "🥩",
    title: "Steak Dinner",
    ingredients: [
      {
        name: "Ribeye Steak",
        num: 1,
        unit: "serving",
        calories: 700,
        protein: 20,
        fat: 300,
        carbohydrates: 0,
      },
      {
        name: "Baked Potato",
        num: 1,
        unit: "serving",
        calories: 250,
        protein: 1,
        fat: 0,
        carbohydrates: 50,
      },
      {
        name: "Green Beans",
        num: 1,
        unit: "cup",
        calories: 35,
        protein: 2,
        fat: 0,
        carbohydrates: 7,
      },
      {
        name: "Garlic Bread",
        num: 1,
        unit: "slice",
        calories: 120,
        protein: 3,
        fat: 4,
        carbohydrates: 500,
      },
      {
        name: "Red Wine",
        num: 1,
        unit: "glass",
        calories: 125,
        protein: 0,
        fat: 0,
        carbohydrates: 4,
      },
    ],
  };

  var choice2 = {
    emoji: "🍝",
    title: "Spaghetti Bolognese",
    ingredients: [
      {
        name: "Ground Beef",
        num: 1,
        unit: "serving",
        calories: 250,
        protein: 200,
        fat: 12,
        carbohydrates: 5,
      },
      {
        name: "Spaghetti Noodles",
        num: 2,
        unit: "ounces",
        calories: 210,
        protein: 70,
        fat: 1,
        carbohydrates: 43,
      },
      {
        name: "Tomato Sauce",
        num: 0.5,
        unit: "cup",
        calories: 50,
        protein: 2,
        fat: 1,
        carbohydrates: 10,
      },
      {
        name: "Parmesan Cheese",
        num: 2,
        unit: "tablespoons",
        calories: 44,
        protein: 3,
        fat: 3,
        carbohydrates: 0,
      },
      {
        name: "Olive Oil",
        num: 1,
        unit: "tablespoon",
        calories: 120,
        protein: 0,
        fat: 140,
        carbohydrates: 0,
      },
      {
        name: "Garlic",
        num: 2,
        unit: "cloves",
        calories: 8,
        protein: 0,
        fat: 0,
        carbohydrates: 250,
      },
    ],
  };

  var blocks_new = [block1, block2];
  var choices_new = [choice1, choice2];

  // Fetch data from firebase
  // Counting calories for all meals in logged_meal right now, NEED TO CONSIDER LOGGED_DATES LATER
  const Fetchdata = async () => {
    setDataFetched(true);

    // TODO: MAKE SURE TO CHANGE THE USER NAME FROM "user1" to the current user's email
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

      console.log(formattedDate);
      let totalCaloriesSum = 0;
      const mealsToday = [];
      loggedMeals.forEach((meal) => {
        const totalcalories = meal.totalcalories;
        totalCaloriesSum += totalcalories;
        // add today's meals
        if (meal.datestamp === formattedDate) {
          mealsToday.push(meal);
        }
      });

      // add the macros up too
      setBlocks(mealsToday);
      console.log("Total Calories Sum:", totalCaloriesSum);
      console.log("all meals from async func");
      console.log(allMeals);
      console.log("----------");
      // console.log(loggedMeals);
      return { allMeals: allMeals, totalCaloriesSum: totalCaloriesSum };
    } catch (error) {
      console.log(error);
    }
  };

  // need to go through logged meals and get all meals matching today's date

  // console.log(filteredMeals);

  const recommendMeals = (allMeals, totalCaloriesSum) => {
    const validMeals = [];
    console.log("daily cals");
    console.log(totalDailyCalories);
    const remainingCalories = totalDailyCalories - totalCaloriesSum;
    if (Array.isArray(allMeals)) {
      allMeals.forEach((meal) => {
        if (meal.totalcalories <= remainingCalories) {
          validMeals.push(meal);
        }
      });
    }

    console.log(validMeals);
    const slicedValidMeals = validMeals.slice(0, 3);
    console.log("MEALS CHECK");
    console.log(allMeals);
    console.log(slicedValidMeals);
    console.log("valid meals");
    setFilterInfo(slicedValidMeals);
    setDineOptions(filteredMeals);
    console.log(dineOptions);
  };

  // if (blocks.length == 0) {
  //   setBlocks(blocks_new);
  // }

  // if (dineOptions.length == 0) {
  //   setDineOptions(choices_new);
  // }

  // 4. Some Helper Functions
  const [index, setIndex] = useState(0);

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
      ["Protein", 835],
      ["Fat", 560],
      ["Carbohydrates", 320],
    ];

    setPieDataNew(data);
  };

  const changePieDataOld = () => {
    var data = [
      ["Type", "Item"],
      ["Protein", 835],
      ["Fat", 560],
      ["Carbohydrates", 320],
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
    setProtein(protein);
    setFat(fat);
    setCarbohydrates(carbohydrates);
    setCalories(calories);

    setPieDataNew(data);
    setDiffData({
      old: pieDataOld,
      new: data,
    });
  }

  // Function to fetch data from the database regarding user daily calorie goal

  const fetchCalorieGoal = async () => {
    try {
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

      const setTDCPromise = new Promise((resolve, reject) => {
        setTotalDailyCalories(parseInt(user.daily_calorie_goal), () => {
          resolve();
        }));

      return setTDCPromise;

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
        daily_calorie_goal: totalDailyCalories,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Start up, fetch the calorie goal
  useEffect(() => {
    fetchCalorieGoal().then(() => {
      fetchMealsAndData();
    });
  }, []);

  // Update the calorie goal
  useEffect(() => {
    console.log("UDPATING CALORIES GOALS");
    updateCalorieGoal();
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
    changePieDataNew();
    changePieDataOld();
    setDataFetched(true);
    // uncomment later
    console.log("all meals after FLOW DATAFETCHED");
    console.log(allMeals);
    Fetchdata().then(({ allMeals, totalCaloriesSum }) => {
      // Save all meals here
      setAllMeals(allMeals);
      console.log("all meals after running fetchdata.then() func");
      console.log(allMeals);
      console.log();
      console.log("----------");

      // Data fetched, now call recommendMeals
      recommendMeals(allMeals, totalCaloriesSum);
      console.log("?????????");
      console.log(filteredMeals);
    });
    console.log("next is all meals");
    console.log(allMeals);
    console.log("Pie data changed");
  }

  // 6. Initialize Data for the first time
  useEffect(() => {
    if (Object.keys(diffData).length === 0) {
      setDiffData({
        old: pieDataOld,
        new: pieDataNew,
      });
    }
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
  }, [blocks]);

  // Change dining options
  useEffect(() => {
    setDineOptions(filteredMeals);
    console.log(filteredMeals);
  }, [filteredMeals]);

  // submit meal option
  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(!submit);
  };

  useEffect(() => {
    console.log(dineOptions);
    console.log(dineOptions);
  }, [dineOptions]);

  return (
    <div className="homepage">
      <div className="upper">
        <div className="header">
          <div id="calories_and_macro_graph">
            <Chart
              chartType="PieChart"
              diffdata={diffData}
              options={options}
              id="calories_and_macro_graph"
            />
          </div>

          <div className="info">
            <div className="info_item">
              <h3>Calories: </h3>
              <p>{calories}</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.carbohydrates }}>
                Carbohydrates:{" "}
              </h3>
              <p>{carbohydrates}</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.fat }}>Fat: </h3>
              <p>{fat}</p>
            </div>
            <div className="info_item">
              <h3 style={{ color: colorForPieChart.protein }}>Protein: </h3>
              <p>{protein}</p>
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
        <h3 className="dinner-recs-heading">Dinner recommendations:</h3>

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
                      onClick={handleSubmit}
                      className="slimPossibleSubmitted"
                    >
                      submitted!
                    </button>
                  ) : (
                    <button
                      className="slimPossibleSubmit"
                      onClick={handleSubmit}
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
