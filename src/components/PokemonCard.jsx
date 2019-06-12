import React from 'react';
import Sprite from './Sprite';
import PokemonTypes from './PokemonTypes';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="pokemon" onClick={onClick}>
      <Sprite sprite={pokemon.sprites} id={pokemon.id} className={'sprite'} />
      <h2>{pokemon.name}</h2>
      <PokemonTypes types={pokemon.types} />
    </div>
  );
};

export default PokemonCard;
