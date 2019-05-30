export const types = [
  'poison',
  'grass',
  'fire',
  'flying',
  'water',
  'bug',
  'normal',
  'electric',
  'ground',
  'fairy',
  'fighting',
  'psychic',
  'rock',
  'steel',
  'ice',
  'ghost'
];
const typeColor = type => {
  switch (type) {
    case 'poison':
      return '#A343A0';
    case 'grass':
      return '#7ACB4E';
    case 'fire':
      return '#F17F2F';
    case 'flying':
      return '#A791F3';
    case 'water':
      return '#6290E9';
    case 'bug':
      return '#A6BB16';
    case 'normal':
      return '#A6A879';
    case 'electric':
      return '#FCCE2D';
    case 'ground':
      return '#E3C763';
    case 'fairy':
      return '#ED9AAE';
    case 'fighting':
      return '#C62C27';
    case 'psychic':
      return '#FF5189';
    case 'rock':
      return '#BB9E3D';
    case 'steel':
      return '#B8B8D0';
    case 'ice':
      return '#94DBD6';
    case 'ghost':
      return '#705894';
    case 'dragon':
      return '#6D33FF';
    default:
      return '';
  }
};
export default typeColor;
