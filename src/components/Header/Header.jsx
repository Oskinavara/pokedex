import React from 'react';
import Input from './Input';
import DropdownIcon from './DropdownIcon';
import Logo from './Logo';
import TypeButtons from './TypeButtons';
const Header = ({ onChange, showAdvancedSearch, rotation, colored, toggleType, translateY }) => {
  return (
    <header className="fixed-header">
      <Logo />
      <div>
        <Input onChange={onChange} />
        <DropdownIcon rotation={rotation} showAdvancedSearch={showAdvancedSearch} />
      </div>
      <TypeButtons colored={colored} toggleType={toggleType} translateY={translateY} />
    </header>
  );
};

export default Header;
