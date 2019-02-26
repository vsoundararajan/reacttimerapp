import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">
              Timer
            </IndexLink>
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">
              Countdown
            </IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by{' '}
            <a href="http://www.google.com" target="_blank">
              Soundararajan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
