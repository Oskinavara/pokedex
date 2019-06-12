import React from 'react';

const PokemonName = ({ name, id }) => {
  return <h1 className="pokemon-name">{`${name} # ${id < 10 ? '00' : id < 100 ? '0' : ''}${id}`}</h1>;
};

export default PokemonName;
