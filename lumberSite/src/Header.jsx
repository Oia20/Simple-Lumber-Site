import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src='./pexels-fwstudio-33348-172289.jpg'/>
      <div className="header-content">
        <h1>Rob Shaw Lumber</h1>
        <p>Quality lumber for all your building needs</p>
      </div>
    </header>
  );
};

export default Header;
