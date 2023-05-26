import "./Ingredient.css";

const Ingredient = (props) => {
  const ingredient = props.ingredient;

  return (
    <div className="Ingredient">
      <p>
        <span>{ingredient.name}:</span>
      </p>
      <p>{ingredient.amount} g</p>
      <p className="calories">{ingredient.calories} cal.</p>
    </div>
  );
};

export default Ingredient;
