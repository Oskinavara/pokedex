const maxStatsValues = data => {
  let valueObject = {};
  valueObject["speed"] = Math.max(...data.map(item => item.stats[0].base_stat));
  valueObject["special-defense"] = Math.max(
    ...data.map(item => item.stats[0].base_stat)
  );
  valueObject["special-attack"] = Math.max(
    ...data.map(item => item.stats[0].base_stat)
  );
  valueObject["defense"] = Math.max(
    ...data.map(item => item.stats[3].base_stat)
  );
  valueObject["attack"] = Math.max(
    ...data.map(item => item.stats[4].base_stat)
  );
  valueObject["hp"] = Math.max(...data.map(item => item.stats[5].base_stat));
  return valueObject;
};

export default maxStatsValues;
