import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./components/PokemonCard.jsx";

const App = () => {
  // const [data, setData] = useState({});
  // const [search, setSearch] = useState("");
  const [dataNew, setDataNew] = useState([]);
  const newArray = new Array(151);
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get(
  //       "http://pokeapi.co/api/v2/pokemon?limit=151"
  //     );
  //     setData(result.data["results"]);
  //   })();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      const result = await Promise.all(
        newArray.map((item, index) =>
          axios.get(`http://pokeapi.co/api/v2/pokemon/${index + 1}`)
        )
      );
      setDataNew(result);
      console.log(result);
    }
    fetchData();
  }, []);

  // const handleChange = event => {
  //   // setSearch(event.target.value);
  //   // console.log(search);
  // };
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
            // onChange={handleChange}
          />
          <label>
            <h5 className="input-label">Type to search for Pokemon</h5>
          </label>
        </div>
      </header>

      <div className="search-results">
        <div className="grid">
          {/* {data.results
            ? data.results[0].name.search("bu") !== -1
              ? Object.keys(data).map((pokemon, index) => (
                  <PokemonCard key={index} pokemonID={index} />
                ))
              : ""
            : ""} */}
          {/* {Object.keys(data).map((pokemon, index) => (
            <PokemonCard key={index} pokemonID={index} />
          ))
          .filter((pokemon, index) => data[index].name.search(search)!==-1)} */}
        </div>
      </div>
    </div>
  );
};

export default App;
