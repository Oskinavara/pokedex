import React, { useEffect, useState } from 'react';
import 'css/pokemoninfo.css';
import axios from 'axios';

const PokemonInfo = ({ pokemon, hide, maxStats }) => {
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
        <i class="fas fa-times close-block__button" onClick={hide} />
      </div>
      <h1 className="pokemon-name">{`${pokemon.name} #${pokemon.id}`}</h1>
      <div className="info-container">
        <div className="info-container__left">
          <img
            src={pokemon.sprites ? pokemon.sprites.front_default : ''}
            alt={`Pokemon${pokemon.id + 1}`}
            className="sprite-info"
          />
          <div className="pokemon-height-weight">
            <span>{`Height: ${pokemon.height / 10}m`}</span>
            <span>{`Weight: ${pokemon.weight / 10}kg`}</span>
          </div>
          <div>
            <h3>Abilities:</h3>
            {pokemon.moves
              .slice(0, 3)
              .map(item => `${item.move.name} `)
              .join('*')
              .replace(/-/g, ' ')
              .split('*')
              .map((item, index) => (
                <span key={index}>{item}</span>
              ))}
          </div>
        </div>
        <div className="info-container__bars">
          <div className="stats-block">
            {Object.keys(maxStats).map((item, index) => (
              <span key={index}>
                <div>
                  <div className="stat-bar" key={index}>
                    <span
                      style={{
                        width: `${barWidth(index)}%`,
                        backgroundColor: `hsl(${barWidth(index) * 1.2 - 20}deg, 80%, 45%)`
                      }}
                    />
                  </div>
                  <div>{item}</div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
      {desc ? <div className="description">{desc}</div> : ''}
    </div>
  );
};

export default PokemonInfo;
