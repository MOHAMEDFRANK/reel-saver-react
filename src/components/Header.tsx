
import React from 'react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-12 bg-white">
      <Logo />
      <nav className="flex items-center gap-4">
        <a href="#" className="font-medium text-gray-800 hover:text-igram-pink">FAQ</a>
        <div className="flex items-center">
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
