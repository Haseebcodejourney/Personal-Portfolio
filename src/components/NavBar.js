// Navbar.js
import React, { useState } from 'react';
import '../style/navbar.css'
import Translation from '../Translation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <figure>
            <img src='https://rainbowit.net/html/inbio/assets/images/logo/logo-dark.png' />
        </figure>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Features</a></li>
        <li><a href="/services">Portfolio</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/clients">Clients</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <li><Translation/></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
