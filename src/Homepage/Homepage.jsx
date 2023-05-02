import React from "react";

const Homepage = () => {
  const name = localStorage.getItem("name");
  const imgUrl = localStorage.getItem("image");

  return (
    <div className="homePage">
      <div className="header">
        <p> Welcome {name}</p>
        <image src={imgUrl} />
      </div>
    </div>
  );
};

export default Homepage;
