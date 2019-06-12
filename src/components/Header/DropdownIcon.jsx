import React from 'react';

const DropdownIcon = ({ showAdvancedSearch, rotation }) => {
  return (
    <span>
      <i
        className="fas fa-chevron-right"
        onClick={showAdvancedSearch}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </span>
  );
};

export default DropdownIcon;
