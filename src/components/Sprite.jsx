import React from 'react';

const Sprite = ({ sprite, id, className }) => {
  return <img src={sprite.front_default} alt={`Pokemon${id + 1}`} className={className} />;
};

export default Sprite;
