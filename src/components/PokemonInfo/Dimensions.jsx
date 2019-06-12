import React from 'react';

const Dimensions = ({ dimensions }) => {
  return (
    <div className="pokemon-height-weight">
      <div>{`Height: ${dimensions.height / 10}m`}</div>
      <div>{`Weight: ${dimensions.weight / 10}kg`}</div>
    </div>
  );
};

export default Dimensions;
