// Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faBell, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Nabar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
     
      <div className="left-icons">
        <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
        <div className="search-bar">
          <input className='input' type="text" placeholder="Search..." />
        </div>
        <FontAwesomeIcon icon={faMicrophone} className="icon voice-icon" />
      </div>
      <div className="right-icons">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <div className="user-profile" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Username</span>
          <FontAwesomeIcon icon={faAngleDown} className="icon" />
          {showDropdown && (
            <div className="dropdown">
              <button>Login</button>
              <button>Signup</button>
            </div>
          )}
        </div>
        
      </div>
     
    </div>
  );
};

export default Navbar;
