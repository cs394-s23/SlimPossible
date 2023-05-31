import "./B_select.css";
import Ingredient from "./Ingredient";
import { useState, useEffect } from "react";
import React from "react";

const B_select = (props) => {
  // state variables initialization
  const [pieData, setPieData] = useState([]);

  // other constants
  const option = props.option;
  const ingredients = option.ingredients;
  const tryMealOption = props.tryMealOption;

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

  rerender_reset();

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
    </div>
  );
};

export default B_select;
