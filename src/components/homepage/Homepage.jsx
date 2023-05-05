import "./Homepage.css";
import { useLocation } from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import { Chart } from "react-google-charts";

import Block from "./Block";

const Homepage = () => {

    // 1. State variables initialization
    const [blocks, setBlocks] = useState([]);
    const [pieDataNew, setPieDataNew] = useState({});
    const [pieDataOld, setPieDataOld] = useState({});
    const [dataFetched, setDataFetched] = useState(false);

    // 2. Fake data
    var block1 = {
        title: "Breakfast",
        ingredients: [
            {
                emoji: "🍞",
                name: "Ingredient 1",
                num: 100,
                calories: 267,
                unit: "g"
            },
            {
                emoji: "🥚",
                name: "Ingredient 2",
                num: 200,
                calories: 155,
                unit: "g"
            }
        ]
    };

    var block2 = {
        title: "Lunch",
        ingredients: [
            {
                emoji: "🍔",
                name: "Beef Patty",
                num: 1,
                calories: 250,
                unit: "serving"
            },
            {
                emoji: "🍟",
                name: "French Fries",
                num: 150,
                calories: 312,
                unit: "g"
            },
            {
                emoji: "🥤",
                name: "Soda",
                num: 1,
                calories: 150,
                unit: "can"
            }
        ]
    };

    var blocks_new = [block1, block2];

    // 3. Add styles to the data that came in
    const addStyles = (blocks) => {

        blocks.forEach((block, index) => {

            // 3.1. Add custom style to each block
            if (block.title != undefined && block.title.toLowerCase() === "Breakfast".toLowerCase()) {
                block.customStyle = {
                    "border-color": "#7ACDFF",
                    backgroundColor: "#EAF7FF",
                    color: "#4ABBFF"
                }

                block.stringsStyle = {
                    "border-color": "#7ACDFF",
                    backgroundColor: '#C3E8FF'
                }

                block.mealInfoStyle = {
                    "border-color": "#7ACDFF",
                }

            } else if (block.title != undefined && block.title.toLowerCase() === "Lunch".toLowerCase()) {
                block.customStyle = {
                    "border-color": "#FF6735",
                    backgroundColor: "#FFE1D7",
                    color: "#CA3200"
                }

                block.stringsStyle = {
                    "border-color": "#FF6735",
                    backgroundColor: '#FFCDBD'
                }

                block.mealInfoStyle = {
                    "border-color": "#FF6735",
                }

            } else if (block.title != undefined && block.title.toLowerCase() === "Dinner".toLowerCase()) {
                block.customStyle = {
                    "border-color": "#2D48FF",
                    backgroundColor: "#D9DEFF",
                    color: "#00128C"
                }

                block.stringsStyle = {
                    "border-color": "#2D48FF",
                    backgroundColor: '#C3CBFF'
                }

                block.mealInfoStyle = {
                    "border-color": "#2D48FF",
                }

            }
        })

        return blocks;
    };
                

    if (blocks.length == 0){
        blocks_new = addStyles(blocks_new);
        setBlocks(blocks_new);
    }

    
    

    const changePieDataNew = () => {
        var data = [
            ["Major", "Degrees"],
            ["Business", 358293],
            ["Education", 101265],
            ["Social Sciences &amp; History", 172780],
            ["Health", 129634],
            ["Psychology", 97216],
        ]

        setPieDataNew(data);
    }

    const changePieDataOld = () => {
        var data = [
            ["Major", "Degrees"],
            ["Business", 256070],
            ["Education", 108034],
            ["Social Sciences &amp; History", 127101],
            ["Health", 81863],
            ["Psychology", 74194],
        ]

        setPieDataOld(data);
    }

    const diffdata = {
        old: pieDataOld,
        new: pieDataNew,
    };

    const options = {
        width: "70%",
        height: "160px",
        pieSliceText: "none",
        backgroundColor: "transparent",
        'chartArea': {'width': '60%', 'height': '90%'},
        legend: {textStyle: {color: 'white', fontSize: 16}}
    };

    if (window.innerWidth <= 768) {
        options.height = '130px';
        options.width = "90%",
        options.legend.textStyle.fontSize = 10;
        options.chartArea.width = '90%';
    }

    if (!dataFetched) {
        changePieDataNew();
        changePieDataOld();
        setDataFetched(true);
        console.log("Pie data changed");
    }

    return (
        <div className="homepage">
            <div className="header">
                <div className="info_box">
                    <Chart
                        chartType="PieChart"
                        diffdata={diffdata}
                        options={options}/>

                    <div className="seperator"></div>

                    <div className="info">
                        <div className="info_item">
                            <h3>Calories: </h3>
                            <p>2156</p>
                        </div>
                        <div className="info_item">
                            <h3>Macro-Nutrients: </h3>
                            <p>456</p>
                        </div>
                        <div className="info_item">
                            <h3>Fat: </h3>
                            <p>300</p>
                        </div>
                        <div className="info_item">
                            <h3>Protein: </h3>
                            <p>50</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                {blocks.map((obj, index) => (<Block key={index} block={obj} />))}
            </div>

            {/* note: the button pencil emote may not appear here */}
            <button className="form_add">✏️</button>
        </div>
    );
};

export default Homepage;
