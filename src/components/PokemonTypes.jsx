import React from 'react';
import typeColor from 'functions/typeColor';

const PokemonTypes = ({ types }) => {
  return (
    <div className="pokemon-type">
      {types.map((item, index) => (
        <span key={index} className="type-span" style={{ background: typeColor(item.type.name) }}>
          {item.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
