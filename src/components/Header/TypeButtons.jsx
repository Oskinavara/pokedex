import React from 'react';
import typeColor, { types } from 'functions/typeColor';

const TypeButtons = ({ colored, toggleType }) => {
  return (
    <div className="type-search">
      {types.map((item, index) => (
        <span
          key={index}
          style={colored[index] ? { background: typeColor(types[index]) } : {}}
          onClick={() => toggleType(index)}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default TypeButtons;
