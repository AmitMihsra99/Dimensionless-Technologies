// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCalendar, faHandHoldingHeart, faBell, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src="/Capture.PNG" alt="Logo" />
      </div>
      <div className="bottom">
        <p>MAIN MENU</p>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faGlobe} /> News Quant
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCalendar} /> Real Economic Indicators
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHandHoldingHeart} /> One Score
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faBell} /> Alert Central
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faPhone} /> Customer Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
