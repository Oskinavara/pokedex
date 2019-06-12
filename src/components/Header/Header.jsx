import React from 'react';
import Input from './Input';
import DropdownIcon from './DropdownIcon';
import Logo from './Logo';
import TypeButtons from './TypeButtons';
const Header = ({ onChange, showAdvancedSearch, toggleType, colored, rotation, headerHeight }) => {
  return (
    <header className="fixed-header">
      <div className="header-wrapper">
        <Logo />
        <Input onChange={onChange} />
        <DropdownIcon rotation={rotation} showAdvancedSearch={showAdvancedSearch} />
      </div>
      <TypeButtons headerHeight={headerHeight} colored={colored} toggleType={toggleType} />
    </header>
  );
};

export default Header;
