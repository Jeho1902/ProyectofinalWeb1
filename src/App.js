import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CocktailDetails from "./pages/CocktailDetails";
import IngredientCocktails from "./pages/IngredientCocktails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
          <Route path="/ingredient/:ingredient" element={<IngredientCocktails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
