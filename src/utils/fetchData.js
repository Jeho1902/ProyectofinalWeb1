const API_BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchCocktails = async (query) => {
  const response = await fetch(`${API_BASE_URL}/${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
