import "./Ingredient.css";

const Ingredient = (props) => {
  const ingredient = props.ingredient;

  return (
    <div className="Ingredient">
      <p>{ingredient.name}:</p>
      <p>{parseFloat(ingredient.amount).toFixed(2)} {ingredient.isGram ? ("g") : ("") }</p>
      <p className="calories">{ingredient.calories.toFixed(2)} kcal.</p>
    </div>
  );
};

export default Ingredient;
