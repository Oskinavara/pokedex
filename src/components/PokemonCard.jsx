import React, { useEffect, useState } from "react";
import axios from "axios";
// import typeColor from "./../functions/typeColor.js"

const PokemonCard = ({ pokemonID, data }) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `http://pokeapi.co/api/v2/pokemon/${pokemonID + 1}`
      );
      setPokemon(result.data);
    })();
  }, [pokemonID]);
  const typeColor = type => {
    switch (type) {
      case "poison":
        return "#A343A0";
      case "grass":
        return "#7ACB4E";
      case "fire":
        return "#F17F2F";
      case "flying":
        return "#A791F3";
      case "water":
        return "#6290E9";
      case "bug":
        return "#A6BB16";
      case "normal":
        return "#A6A879";
      case "electric":
        return "#FCCE2D";
      case "ground":
        return "#E3C763";
      case "fairy":
        return "#ED9AAE";
      case "fighting":
        return "#C62C27";
      case "psychic":
        return "#FF5189";
      case "rock":
        return "#BB9E3D";
      case "steel":
        return "#B8B8D0";
      case "ice":
        return "#94DBD6";
      case "ghost":
        return "#705894";
      case "dragon":
        return "#6D33FF";
      default:
        return "";
    }
  };
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
