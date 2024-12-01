import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCocktails } from "../utils/fetchData";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        const data = await fetchCocktails(`lookup.php?i=${id}`);
        setCocktail(data.drinks[0]);
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    };
    getCocktailDetails();
  }, [id]);

  if (!cocktail) return <div className="container my-5">Cargando...</div>;

  const ingredients = Object.keys(cocktail)
    .filter((key) => key.startsWith("strIngredient") && cocktail[key])
    .map((key) => cocktail[key]);

  return (
    <div className="container my-5">
      <div className="card">
        <img
          src={cocktail.strDrinkThumb}
          className="card-img-top"
          alt={cocktail.strDrink}
        />
        <div className="card-body">
          <h3 className="card-title">{cocktail.strDrink}</h3>
          <h5>Ingredientes</h5>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                <Link to={`/ingredient/${ingredient}`} className="text-decoration-none">
                  {ingredient}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/" className="btn btn-secondary mt-3">
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
