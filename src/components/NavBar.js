import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
  return (<div className="navbar">
    <ul id="navbar-list">
      <li className="navbar-list-element"><Link to='/'>Logo</Link></li>
      <li className="navbar-list-element"><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
      <li className="navbar-list-element"><Link to="/"><i className="fas fa-network-wired"></i>Organisation</Link></li>

      <li className="navbar-list-element" id="user-status-list-item"><a>
          <div id='user-status'>
            <button id="firstbtn" className="login-btn" ><Link to='/signin'>Log In</Link></button>
            <button id="secondbtn" className="login-btn"><Link to="/signup">Sign Up</Link></button>
          </div>
        </a></li>
    </ul>
  </div>);
}

export default NavBar;
