import React, { useState } from "react";
import typeColor from "./../functions/typeColor.js";
import PokemonInfo from "./PokemonInfo.jsx";

const PokemonCard = ({ pokemon, maxStats }) => {
  const [display, setDisplay] = useState("none");
  const showInfo = () => {
    setDisplay("block");
  };
  const hideInfo = () => {
    setDisplay("none");
  };
  return (
    <div className="pokemon">
      <PokemonInfo pokemon={pokemon} maxStats={maxStats}display={display} hide={hideInfo} />
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : ""}
        alt={`Pokemon${pokemon.id + 1}`}
        className="sprite"
        onClick={showInfo}
      />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-type">
        {pokemon.types ? (
          pokemon.types.length === 2 ? (
            <div>
              <span
                className="type-span"
                style={{ background: typeColor(pokemon.types[0].type.name) }}
              >
                {pokemon.types[0].type.name}
              </span>
              <span
                className="type-span"
                style={{ background: typeColor(pokemon.types[1].type.name) }}
              >
                {pokemon.types[1].type.name}
              </span>
            </div>
          ) : (
            <span
              className="type-span"
              style={{ background: typeColor(pokemon.types[0].type.name) }}
            >
              {pokemon.types[0].type.name}
            </span>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
