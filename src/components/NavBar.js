import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import {useSelector,useDispatch} from 'react-redux';
import {auth} from '../firebase-config';
import {signOut} from 'firebase/auth';
import { userActions } from '../store/user-context';
import Logo from '../images/logo.png'

function NavBar() {
  const dispatch = useDispatch();
  const userCtx = useSelector(state=>state.user);
  const logoutUser = async()=>{
      await signOut(auth);
      dispatch(userActions.removeUser());
      localStorage.removeItem("user");
      window.location = '/';
  }
  return (<div className="navbar">
    <ul id="navbar-list">
      <li className="navbar-list-element"><Link to='/'><img src={Logo} alt="logo" /></Link></li>
      <li className="navbar-list-element"><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
      <li className="navbar-list-element"><Link to="/"><i className="fas fa-network-wired"></i>Organisation</Link></li>

      <li className="navbar-list-element" id="user-status-list-item"><a>
          <div id='user-status'>
            {!userCtx.id?
              <>
              <button id="firstbtn" className="login-btn" ><Link to='/signin'>Log In</Link></button>
            <button id="secondbtn" className="login-btn"><Link to="/signup">Sign Up</Link></button>
              </> :  <button className='login-btn' onClick={logoutUser}>Logout</button>}
          </div>
        </a></li>
    </ul>
  </div>);
}

export default NavBar;
