import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [foodName, setFoodName] = useState("");
  const [ingredient1, seIngredient1] = useState("");
  const [ingredient2, seIngredient2] = useState("");
  const [ingredient3, seIngredient3] = useState("");

  const handleSubmit = () => {
    console.log(foodName);
  };

  return (
    <div className="formPage">
      <form className="enterFoodInfoform">
        <div className="form-control">
          <label>Meal Name: </label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label> Ingredient 1: </label>
          <input
            type="text"
            value={ingredient1}
            onChange={(e) => seIngredient1(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label> Ingredient 2: </label>
          <input
            type="text"
            value={ingredient2}
            onChange={(e) => seIngredient2(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label> Ingredient 3: </label>
          <input
            type="text"
            value={ingredient3}
            onChange={(e) => seIngredient3(e.target.value)}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Form;
