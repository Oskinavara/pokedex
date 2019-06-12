import React, { useEffect, useState } from 'react';
import 'css/pokemoninfo.scss';
import axios from 'axios';
import PokemonName from 'components/PokemonInfo/PokemonName';
import Sprite from '../Sprite';
import Dimensions from './Dimensions';
import Abilities from './Abilities';
import Stats from './Stats';
const PokemonInfo = ({ pokemon, hide, maxStats }) => {
  const [desc, setDesc] = useState('');
  const barWidth = index => {
    let width = (pokemon.stats[index].base_stat * 100) / Object.values(maxStats)[index];
    return `${width}`;
  };
  const [animationStart, setAnimationStart] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const descIndex = result.data.flavor_text_entries.findIndex(item => item.language.name === 'en');
      setDesc(result.data.flavor_text_entries[descIndex].flavor_text);
    }
    fetchData();
    setAnimationStart(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="info-block">
      <div className="close-block">
        <i className="fas fa-times" onClick={hide} />
      </div>
      <PokemonName name={pokemon.name} id={pokemon.id} />
      <div className="info-container">
        <Sprite sprite={pokemon.sprites} id={pokemon.id} className={'sprite-info'} />

        <div>
          <Dimensions dimensions={pokemon} />
          <Abilities abilities={pokemon.moves} />
        </div>
        <Stats maxStats={maxStats} animationStart={animationStart} barWidth={barWidth} />
      </div>
      <div className="pokemon-description">{desc ? desc : 'Loading...'}</div>
    </div>
  );
};

export default PokemonInfo;
