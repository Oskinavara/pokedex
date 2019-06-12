import React from 'react';

const Input = ({ onChange }) => {
  return <input type="search" className="input" name="search" placeholder="Name or Number" onChange={onChange} />;
};

export default Input;
