const maxStatsValues = data => {
  let valueObject = {};
  let obj = {};
  valueObject = data.flatMap(x => x.stats);
  valueObject.forEach(x => {
    obj[x.stat.name] = Math.max(obj[x.stat.name] | 0, x.base_stat);
  });
  return obj;
};
export default maxStatsValues;
