import React, { useEffect, useState } from 'react';
import 'css/pokemoninfo.scss';
import axios from 'axios';
import PokemonName from 'components/PokemonInfo/PokemonName';
// import Sprite from '../Sprite';
// import Dimensions from './Dimensions';
// import Abilities from './Abilities';
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
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const descIndex = result.data.flavor_text_entries.findIndex(item => item.language.name === 'en');
      setDesc(result.data.flavor_text_entries[descIndex].flavor_text);
    }
    fetchData();
    setAnimationStart(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="info-container">
      <div className="info-block">
        <div className="close-block">
          <i className="fas fa-times" onClick={hide} />
        </div>
        <PokemonName name={pokemon.name} id={pokemon.id} />

        <img
          src={pokemon.sprites ? pokemon.sprites.front_default : ''}
          alt={`Pokemon${pokemon.id + 1}`}
          className={'sprite-info'}
        />

        <div className="feats">
          <h4>{`Height: ${pokemon.height / 10}m`}</h4>
          <h4>{`Weight: ${pokemon.weight / 10}kg`}</h4>

          <h3>Abilities:</h3>
          {pokemon.moves
            .slice(0, 3)
            .map(item => `${item.move.name} `)
            .join('*')
            .replace(/-/g, ' ')
            .split('*')
            .map((item, index) => (
              <h4 className="ability" key={index}>
                {item}
              </h4>
            ))}
        </div>
        <Stats maxStats={maxStats} animationStart={animationStart} barWidth={barWidth} />
        <div className="pokemon-description">
          <h3>{desc ? desc : 'Loading...'}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
