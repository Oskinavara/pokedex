import React from "react";
import typeColor from "./../functions/typeColor.js";

const PokemonCard = ({ pokemon, pokemonID }) => {
  return (
    <div className="pokemon">
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : ""}
        alt={`Pokemon${pokemonID + 1}`}
        className="sprite"
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
