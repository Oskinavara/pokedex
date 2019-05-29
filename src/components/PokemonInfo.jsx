import React from 'react';
import 'css/pokemoninfo.css';

const PokemonInfo = ({ pokemon, display, hide, maxStats }) => {
  const barWidth = index => {
    let width = (pokemon.stats[index].base_stat * 100) / Object.values(maxStats)[index];
    return `${width}`;
  };
  return (
    <div className="info-block" style={{ display: display }}>
      <div className="close-block">
        <button className="close-block__button" onClick={hide}>
          {'X'}
        </button>
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
                <div className="stat-bar" key={index}>
                  <span
                    style={{
                      width: `${barWidth(index)}%`,
                      backgroundColor: `hsl(${barWidth(index) * 1.2 - 20}deg, 80%, 45%)`
                    }}
                  />
                </div>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
