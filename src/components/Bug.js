import React from 'react';
import './Bug.scss';

function Bug() {
  return <div id="bug-box">
      <h4 id="bug-title">1)Bug Title</h4>
      <p className="bug-text">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <button id="bug-discard-button">Read More</button>
  </div>;
}

export default Bug;
