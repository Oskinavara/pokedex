import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [dataNew, setDataNew] = useState({});
  const newArray = new Array(151).fill("");

  useEffect(() => {
    async function fetchData() {
      const result = await Promise.all(
        newArray.map((item, index) =>
          axios.get(`http://pokeapi.co/api/v2/pokemon/${index + 1}`)
        )
      );
      setDataNew(result.map(item => item.data));
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const handleChange = event => {
    setSearch(event.target.value);
  };
  return (
    <div className="App">
      {dataNew[0] ? console.log(dataNew) : ""}
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
          {dataNew[0]
            ? dataNew
                .map((item, index) => (
                  <PokemonCard
                    key={index}
                    pokemonID={index}
                    pokemon={dataNew[index]}
                  />
                ))
                .filter(
                  (item, index) => dataNew[index].name.search(search) !== -1
                )
            : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
