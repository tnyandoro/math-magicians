import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // window.addEventListener('resize');

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Math magicians
            {' '}
            <i className=" fab fa-typo3" />
          </Link>
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/calc"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/qoute" className="nav-links" onClick={closeMobileMenu}>
                Qoute
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
