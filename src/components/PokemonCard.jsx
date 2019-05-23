import React, { useState } from 'react';
import typeColor from './../functions/typeColor.js';
import PokemonInfo from './PokemonInfo.jsx';

const PokemonCard = ({ pokemon, maxStats }) => {
  const [display, setDisplay] = useState('none');
  const showInfo = () => {
    setDisplay('block');
  };
  const hideInfo = () => {
    setDisplay('none');
  };
  return (
    <div className="pokemon">
      <PokemonInfo pokemon={pokemon} maxStats={maxStats} display={display} hide={hideInfo} />
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : ''}
        alt={`Pokemon${pokemon.id + 1}`}
        className="sprite"
        onClick={showInfo}
      />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-type">
        {pokemon.types.map(item => (
          <span className="type-span" style={{ background: typeColor(item.type.name) }}>
            {item.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
