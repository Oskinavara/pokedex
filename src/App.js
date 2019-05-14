import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";
import maxStatsValues from "./functions/maxStatsValues.js"

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const newArray = new Array(151).fill(""); //only first generation of Pokemon

  useEffect(() => {
    async function fetchData() {
      const result = await Promise.all(
        newArray.map((item, index) =>
          axios.get(`http://pokeapi.co/api/v2/pokemon/${index + 1}`)
        )
      );
      setData(result.map(item => item.data));
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

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
            placeholder="Name or Number"
            onChange={event => setSearch(event.target.value)}
          />
          <label>
            <h5 className="input-label">Type to search for Pokemon</h5>
          </label>
        </div>
      </header>
      <div className="search-results">
        <div className="grid">
          {data[0]
            ? data
                .map((item, index) => (
                  <PokemonCard
                    key={index}
                    pokemonID={index}
                    pokemon={data[index]}
                  />
                ))
                .filter(
                  (item, index) =>
                    data[index].name.search(search) !== -1 ||
                    data[index].id.toString() === search
                )
            : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
