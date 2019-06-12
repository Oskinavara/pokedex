import React from 'react';

const Abilities = ({ abilities }) => {
  return (
    <div className="abilities">
      <h3>Abilities:</h3>
      {abilities
        .slice(0, 3)
        .map(item => `${item.move.name} `)
        .join('*')
        .replace(/-/g, ' ')
        .split('*')
        .map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
    </div>
  );
};

export default Abilities;
