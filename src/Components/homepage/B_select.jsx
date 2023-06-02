import "./B_select.css";
import Ingredient from "./Ingredient";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const B_select = (props) => {
  // other constants
  const option = props.option;
  const ingredients = option.ingredients;
  const tryMealOption = props.tryMealOption;

  // find the data for the pie chart
  var tCal = 0;
  var tCarbohyDr = 0;
  var tProtein = 0;
  var tFat = 0;

  ingredients.forEach((ingredient) => {
    tCal += ingredient.calories;
    tCarbohyDr += ingredient.macros.carbs;
    tProtein += ingredient.macros.protein;
    tFat += ingredient.macros.fat;
  });

  var keyLabels = ["carbs", "proteins", "fats"];
  let dataValues = [tCarbohyDr, tProtein, tFat];

  const pieData = {
    labels: keyLabels,
    datasets: [
      {
        label: "# of Calories",
        data: dataValues,
        backgroundColor: ["#245dff", "#e0c342", "#ff4766"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const ingredients_html = ingredients.map((ingredient, index) => (
    <Ingredient key={index} ingredient={ingredient} />
  ));

  const tryMealOptionThis = (e) => {
    var newData = {};

    // Collect aggregate data for the meal option
    var totalCalories = 0;
    var totalCarbohydrates = 0;
    var totalProtein = 0;
    var totalFat = 0;

    ingredients.forEach((ingredient) => {
      totalCalories += ingredient.calories;
      totalCarbohydrates += ingredient.macros.carbs;
      totalProtein += ingredient.macros.protein;
      totalFat += ingredient.macros.fat;
    });

    if (e.target.checked) {
      console.log("checked");
      newData.calories = totalCalories;
      newData.carbohydrates = totalCarbohydrates;
      newData.protein = totalProtein;
      newData.fat = totalFat;
      newData.name = option.name;
    } else if (!e.target.checked) {
      console.log("unchecked");
    }

    // Provide updated carbohydrate, protein, fat, and calories values to the parent component
    tryMealOption(newData);
  };

  return (
    <div className="block">
      <div className="block-title">
        <h1>{option.name}</h1>
        <input
          id="mealCheckBox"
          type="checkbox"
          onChange={tryMealOptionThis}
        ></input>
      </div>
      <div className="block-content">
        <div className="strings">{ingredients_html}</div>
      </div>

      {/* total Calories && pie chart */}
      <h2 className="total-calories" style={{ fontSize: "16px" }}>
        Total Calories: {tCal}
      </h2>

      <div className="ingredient-Composition-Chart">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default B_select;
