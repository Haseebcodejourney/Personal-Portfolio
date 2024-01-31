import React, { useState } from 'react';
import '../style/header.css';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
 <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Brand /> */}
          221
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
          adad
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              1
              {/* <NavLink to="/">Home</NavLink> */}
            </li>
            <li>
              2
              {/* <NavLink to="/blog">Blog</NavLink> */}
            </li>
            <li>
              3
              {/* <NavLink to="/projects">Projects</NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/about">About</NavLink> */}
            </li>
            <li>
              {/* <NavLink to="/contact">Contact</NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
