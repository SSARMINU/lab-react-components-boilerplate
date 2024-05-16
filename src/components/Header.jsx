// Header.jsx
import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" />
      <Navigation />
      <a className='cta' href='#'><button>Contact</button></a>
    </header>
  );
}

export default Header;
