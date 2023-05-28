import "./Ingredient.css";

const Ingredient = (props) => {
  const ingredient = props.ingredient;

  console.log(ingredient)

  return (
    <div className="Ingredient">
      <p>{ingredient.name}:</p>
      <p>{ingredient.amount} {ingredient.isGram ? ("g") : ("") }</p>
      <p className="calories">{ingredient.calories} kcal.</p>
    </div>
  );
};

export default Ingredient;
