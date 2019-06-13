import React from 'react';
import typeColor from 'functions/typeColor';

const PokemonTypes = ({ types }) => {
  return (
    <div className="pokemon-types">
      {types.map((item, index) => (
        <span key={index} style={{ background: typeColor(item.type.name) }}>
          {item.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
