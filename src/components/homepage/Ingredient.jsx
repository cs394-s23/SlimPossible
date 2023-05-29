import "./Ingredient.css";

const Ingredient = (props) => {
  const ingredient = props.ingredient;

  return (
    <div className="Ingredient">
      <p>{ingredient.name}:</p>
      <p>{ingredient.amount} {ingredient.servingUnit || "" }</p>
      <p className="calories">{ingredient.calories} kcal.</p>
    </div>
  );
};

export default Ingredient;
