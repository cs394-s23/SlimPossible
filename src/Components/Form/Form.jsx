import React, { useState } from "react";
import "./Form.css";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = useState(false);
  const [meals, setMeals] = useState([
    { name: "", ingredients: "", isFavorite: "", date: "" },
  ]);

  const handleFormChange = (e, i) => {
    let data = [...meals];
    data[i][e.target.name] = e.target.value;
    data[i].date = new Date();
    data[i].isFavorite = checked ? true : false;
    setMeals(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(meals);
  };

  const addFields = () => {
    let obj = { name: "", ingredients: "", isFavorite: "false", date: "" };
    setMeals([...meals, obj]);
  };

  const removeMeal = (e, idx) => {
    e.preventDefault();
    let data = [...meals];
    data.splice(idx, 1);
    setMeals(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchQuery);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <h3>Add a meal!</h3>

      {/* <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button type="submit">Search</button>
      </form> */}

      <div className="addMeals">
        {meals.map((form, idx) => {
          return (
            <div className="MealInputField" key={idx}>
              <input
                name="name"
                placeholder="Enter meal"
                onChange={(e) => handleFormChange(e, idx)}
                value={form.name}
              />

              <label className="checkInput">
                <input
                  name="isFavorite"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span>Favorite Food?</span>
              </label>

              <input
                name="ingredients"
                placeholder="Enter ingredients"
                onChange={(e) => handleFormChange(e, idx)}
                value={form.ingredients}
              />

              <button
                className="deleteMeal"
                onClick={(event, idx) => removeMeal(event, idx)}
              >
                X
              </button>
            </div>
          );
        })}
        <div className="buttons-List">
          <button onClick={addFields}>Add Meal..</button>
          <button onClick={(e) => submitForm(e)}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
