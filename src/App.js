import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";

const App = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setData(result.data["results"]);
    }
    fetchData();
  }, []);

  const handleChange = event => {
    setSearch(event.target.value);
    console.log(search);
  };
  return (
    <div className="App">
      <header className="fixed-header">
        <div className="logo-block">
          <img src="images/logo.png" alt="" className="logo" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="input"
            name="search"
            onChange={handleChange}
          />
          <label>
            <h5 className="input-label">Type to search for Pokemon</h5>
          </label>
        </div>
      </header>

      <div className="search-results">
        <div className="grid">
          {Object.keys(data).map((pokemon, index) => (
            <PokemonCard key={index} pokemonID={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
