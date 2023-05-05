import "./Ingredient.css";
import { useLocation } from "react-router-dom";

const Ingredient = (props) => {

    const ingredient = props.ingredient;

    return (
        <div className="Ingredient">
            <div className="ing_top">
                <h3>{ingredient.emoji}</h3>
                <h3>{ingredient.name}:</h3>
                <p> {ingredient.num} {ingredient.unit}</p>
            </div>
            <div className="ing_bottom">
                <p>{ingredient.calories} calories</p>
            </div>
        </div>
    );
};

export default Ingredient;
