import React, { useState, useEffect } from 'react';
import 'App.scss';
import 'css/header.scss';
import 'css/grid.scss';
import axios from 'axios';
import PokemonCard from 'components/PokemonCard.jsx';
import PokemonInfo from 'components/PokemonInfo/PokemonInfo';
import maxStatsValues from 'functions/maxStatsValues';
import { types } from 'functions/typeColor';
import Header from './components/Header/Header';

const App = () => {
  const [search, setSearch] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [data, setData] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(0);
  const [colored, setColored] = useState(Array(18).fill(false));
  const newArray = new Array(151).fill(''); //only first generation of Pokemon
  useEffect(() => {
    async function fetchData() {
      const result = await Promise.all(
        newArray.map((item, index) => axios.get(`http://pokeapi.co/api/v2/pokemon/${index + 1}`))
      );
      setData(result.map(item => item.data));
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  const showInfo = index => {
    setInfoVisible(!infoVisible);
    setChosenPokemon(index);
    setScale(1);
  };

  const hideInfo = () => {
    setInfoVisible(false);
    setScale(0);
  };
  const showAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
    headerHeight === 0 ? setHeaderHeight(80) : setHeaderHeight(0);
    rotation === 0 ? setRotation(90) : setRotation(0);
  };
  const toggleType = index => {
    setColored(colored.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="App">
      <Header
        onChange={event => setSearch(event.target.value)}
        showAdvancedSearch={showAdvancedSearch}
        toggleType={toggleType}
        colored={colored}
        rotation={rotation}
        headerHeight={headerHeight}
      />
      {infoVisible && data[0] ? (
        <PokemonInfo
          pokemon={data[chosenPokemon]}
          infoVisible={infoVisible}
          maxStats={maxStatsValues(data)}
          hide={hideInfo}
          scale={scale}
        />
      ) : (
        ''
      )}

      <div className="pokemon-grid" style={{ transform: `translateY(${headerHeight}px)` }}>
        {data[0]
          ? data
              .map((item, index) => <PokemonCard key={index} pokemon={data[index]} onClick={() => showInfo(index)} />)
              .filter(
                (item, index) =>
                  (colored
                    .map((sub, subIndex) => (sub === true ? types[subIndex] : false))
                    .filter(sub => sub !== false)
                    .every(val => data[index].types.map(sub => sub.type.name).includes(val)) &&
                    data[index].name.search(search) !== -1) ||
                  data[index].id.toString() === search
              )
          : ''}
      </div>
    </div>
  );
};
//
export default App;
