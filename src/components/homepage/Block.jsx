import "./Block.css";
import Ingredient from "./Ingredient";
import { useState, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { Chart } from "react-google-charts";

const Block = (props) => {


    // state variables initialization
    const [pieData, setPieData] = useState([]);
    const [options, setOptions] = useState({});

    // other constants
    const block = props.block;
    const ingredients = block.ingredients;

    const ingredients_html = ingredients.map((ingredient, index) => (<Ingredient key={index} ingredient={ingredient} />));

    // Make specific google pie chart for each block for their calories breakdown
    // Always fetch data here if anything does change
    if (pieData.length === 0) {
        const pieDataTemp = [
            ["Ingredient", "Calories"],
        ];

        ingredients.forEach((ingredient) => {
            pieDataTemp.push([ingredient.name, ingredient.calories]);
        });

        setPieData(pieDataTemp);
    }

    if (Object.keys(options).length === 0) {
        const optionsTemp = {
            width: "100%",
            height: "30vh",
            title: "Calories Breakdown",
            pieHole: 0.4,
            is3D: false,
            backgroundColor: "transparent",
        }

        setOptions(optionsTemp);
    }

    return (
        <div className="block" style={block.customStyle}>
            <div className="block-title">
                <h1>{block.title}</h1>
            </div>
            <div className="block-content">
                <div className="strings" style={block.stringsStyle}>
                    {ingredients_html}
                </div>
                <Chart
                    chartType="PieChart"
                    data={pieData}
                    options={options}
                />
            </div> 
        </div>
    );
};

export default Block;
