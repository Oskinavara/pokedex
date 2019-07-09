import React from 'react';
import typeColor, { types } from 'functions/typeColor';

const TypeButtons = ({ colored, toggleType, translateY }) => {
  return (
    <div className="type-buttons__wrapper" style={{ transform: `translateY(${translateY}px)` }}>
      <div
        className="type-buttons__cover"
        style={
          translateY !== 0
            ? { transform: `scaleY(0)` }
            : { transform: `scaleY(1)`, transitionDelay: 0, transition: `transform 0.3s`, transformOrigin: `top` }
        }
      />
      <div className="type-buttons">
        {types.map((item, index) => (
          <span
            key={index}
            style={colored[index] ? { background: typeColor(types[index]) } : {}}
            onClick={() => toggleType(index)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeButtons;
