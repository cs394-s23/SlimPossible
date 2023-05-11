import "./Ingredient.css";

const Ingredient = (props) => {
  const ingredient = props.ingredient;

  return (
    <div className="Ingredient">
      <p>
        <span className="ingredient-emoji">{ingredient.emoji}</span>
        <span>{ingredient.name}:</span>
      </p>
      <p>
        {ingredient.num} {ingredient.unit}
      </p>
      <p className="calories">{ingredient.calories} cal.</p>
    </div>
  );
};

export default Ingredient;
