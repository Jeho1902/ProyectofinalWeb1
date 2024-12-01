import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCocktails } from "../utils/fetchData";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const data = await fetchCocktails("filter.php?c=Cocktail");
        setCocktails(data.drinks);
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      }
    };
    getCocktails();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Cócteles</h1>
      <div className="row">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={cocktail.strDrinkThumb}
                className="card-img-top"
                alt={cocktail.strDrink}
              />
              <div className="card-body">
                <h5 className="card-title">{cocktail.strDrink}</h5>
                <Link to={`/cocktail/${cocktail.idDrink}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
