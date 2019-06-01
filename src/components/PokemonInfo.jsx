import React, { useEffect, useState } from 'react';
import 'css/pokemoninfo.scss';
import axios from 'axios';

const PokemonInfo = ({ pokemon, hide, maxStats, scale }) => {
  const [desc, setDesc] = useState('');
  const barWidth = index => {
    let width = (pokemon.stats[index].base_stat * 100) / Object.values(maxStats)[index];
    return `${width}`;
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`http://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
      const descIndex = result.data.flavor_text_entries.findIndex(item => item.language.name === 'en');
      setDesc(result.data.flavor_text_entries[descIndex].flavor_text);
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="info-block">
      <div className="close-block">
        <i className="fas fa-times " onClick={hide} />
      </div>
      <h1 className="pokemon-name">{`${pokemon.name} # ${pokemon.id < 10 ? '00' : pokemon.id < 100 ? '0' : ''}${
        pokemon.id
      }`}</h1>
      <div className="info-container">
        <div>
          <img
            src={pokemon.sprites ? pokemon.sprites.front_default : ''}
            alt={`Pokemon${pokemon.id + 1}`}
            className="sprite-info"
          />
        </div>
        <div>
          <div className="pokemon-height-weight">
            <div>{`Height: ${pokemon.height / 10}m`}</div>
            <div>{`Weight: ${pokemon.weight / 10}kg`}</div>
          </div>
          <div className="abilities">
            <h3>Abilities:</h3>
            {pokemon.moves
              .slice(0, 3)
              .map(item => `${item.move.name} `)
              .join('*')
              .replace(/-/g, ' ')
              .split('*')
              .map((item, index) => (
                <div key={index}>{item}</div>
              ))}
          </div>
        </div>
        <div className="stats-block">
          {Object.keys(maxStats).map((item, index) => (
            <span key={index}>
              <div>
                <div className="stat-bar" key={index}>
                  <span
                    style={{
                      width: `${barWidth(index)}%`,
                      background: `hsl(${(barWidth(index) * 110) / 90}deg, 80%, 45%)`,
                      transform: `scaleX(${scale})`,
                      transition: `ease-in 10s`
                    }}
                  />
                </div>
                <div className="stat-name">{item}</div>
              </div>
            </span>
          ))}
        </div>
      </div>
      <div className="pokemon-description">{desc && desc}</div>
    </div>
  );
};

export default PokemonInfo;
