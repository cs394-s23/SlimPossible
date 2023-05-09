import React, { useState } from "react";
import "./Form.css";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchQuery);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search: </label>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
