import React from "react";

const PokemonInfo = ({ pokemon, display, hide }) => {
  return (
    <div className="info-block" style={{ display: display }}>
      <div className="close-block">
        <button className="close-block__button" onClick={hide}>
          {"X"}
        </button>
      </div>
      <div className="pokemon-name">
        <h1>{`${pokemon.name} #${pokemon.id}`}</h1>
      </div>
      <div className="pokemon-height-weight">
        <span>{`Height: ${pokemon.height / 10}m`}</span>
        <span>{`Weight: ${pokemon.weight / 10}kg`}</span>
      </div>
      <div>
        <h3>Abilities:</h3>
        {pokemon.moves
          .slice(0, 3)
          .map(item => `${item.move.name} `)
          .join("*")
          .replace(/-/g, " ")
          .split("*")
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}
      </div>
      <div>
        <h3>Stats:</h3>
        <div class="progress">
          <span style={{ width: "25%" }} />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
