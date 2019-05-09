import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ pokemonID }) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `http://pokeapi.co/api/v2/pokemon/${pokemonID + 1}`
      );
      setPokemon(result.data);
    })();
  }, [pokemonID]);
  return (
    <div className="pokemon">
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : ""}
        alt={`Pokemon${pokemonID}`}
        className="sprite"
      />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-type">
        <span>
          {pokemon.types ? (
            pokemon.types.length === 2 ? (
              <span>
                {pokemon.types[0].type.name}
                {pokemon.types[1].type.name}
              </span>
            ) : (
              <span>{pokemon.types[0].type.name}</span>
            )
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
