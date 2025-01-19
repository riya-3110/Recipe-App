import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { SearchBar } from "./components/searchBar";
import { Menu } from "./components/Menu";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = async (searchQuery) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);
    try {
      const formattedIngredients = searchQuery.split(" ").join(",");
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/findByIngredients",
        // "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2",
        {
          params: {
            apiKey: apiKey,
            ingredients: formattedIngredients,
            number: 5,
          },
        }
      );
      console.log("Response ", response);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (search) {
      fetchData(search);
    }
  }, [search]);

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar setSearch={setSearch} />
      {error ? <p>Error : {error}</p> : data && <Menu data={data} />}
    </div>
  );
}

export default App;
