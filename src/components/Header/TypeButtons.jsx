import React from 'react';
import typeColor, { types } from 'functions/typeColor';

const TypeButtons = ({ headerHeight, colored, toggleType }) => {
  return (
    <div className="type-block" style={{ transform: `translateY(${headerHeight}px)` }}>
      <div className="type-search">
        {types.map((item, index) => (
          <span
            key={index}
            style={colored[index] ? { background: typeColor(types[index]) } : {}}
            className="type-span"
            onClick={() => toggleType(index)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeButtons;
