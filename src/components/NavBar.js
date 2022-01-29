import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (<div className="navbar">
    <ul>
      <li><a>Logo</a></li>
      <li><a><i class="fas fa-home"></i>Home</a></li>
      <li><a><i class="fas fa-network-wired"></i>Organisation</a></li>
      <li id="user-status-list-item"><a>
          <div id='user-status'>
            <button id="firstbtn" className="login-btn">Login</button>
            <button id="secondbtn" className="login-btn">Sign Up</button>
          </div>
        </a></li>
    </ul>
  </div>);
}

export default NavBar;
