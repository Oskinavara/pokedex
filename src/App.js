import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setData(result.data["results"]);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="fixed-header">
        <div className="logo-block">
          <img src="images/logo.png" alt="" className="logo" />
        </div>
        <div className="search-bar">
          <input type="text" className="input" name="search" />
          <label>
            <h5 className="input-label">Type to search for Pokemon</h5>
          </label>
        </div>
      </header>

      <div className="search-results">
        <div className="grid">
          {Object.keys(data).map((pokemon, index) => (
            <div key={index}>{data[index].name}</div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default App;
