import React, { useState } from 'react';
import Help from './Help';

const Header = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="header">
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <button className="help-button" onClick={handleHelpClick}>{showHelp ? 'Hide Help' : 'Help'}</button>
      {showHelp && <Help />}
    </div>
  );
};

export default Header;

