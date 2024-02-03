// Navbar.js
import React, { useState } from 'react';
import '../style/navbar.css'

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
        {/* <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i> */}
        toggle
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Features</a></li>
        <li><a href="/services">Portfolio</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/clients">Clients</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
