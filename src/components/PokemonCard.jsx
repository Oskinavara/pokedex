import React from 'react';
import typeColor from 'functions/typeColor';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="pokemon" onClick={onClick(pokemon.id)}>
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : ''}
        alt={`Pokemon${pokemon.id + 1}`}
        className="sprite"
      />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-type">
        {pokemon.types.map((item, index) => (
          <span key={index} className="type-span" style={{ background: typeColor(item.type.name) }}>
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
