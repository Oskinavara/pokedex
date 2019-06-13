import React from 'react';
import Input from './Input';
import DropdownIcon from './DropdownIcon';
import Logo from './Logo';
const Header = ({ onChange, showAdvancedSearch, rotation }) => {
  return (
    <header className="fixed-header">
      <Logo />
      <div>
        <Input onChange={onChange} />
        <DropdownIcon rotation={rotation} showAdvancedSearch={showAdvancedSearch} />
      </div>
    </header>
  );
};

export default Header;
