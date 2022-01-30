import React,{useRef} from 'react';
import {auth,db} from '../firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {collection, addDoc } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import {userActions} from '../store/user-context';
import './SignUpBox.scss';
import {useNavigate} from 'react-router-dom';

function SignUpBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const addNewUser = async (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password =  passwordRef.current.value;
    const name =  nameRef.current.value;
    try{
      const userCreds = await createUserWithEmailAndPassword(auth,email,password);
      emailRef.current.value = '';
      passwordRef.current.value = '';
      nameRef.current.value = '';

      // adding userName
      const usersRef = collection(db,'users');
      const userDetails = {
        email,
        id: userCreds.user.uid,
        name,
      };
      await addDoc(usersRef,userDetails);
      nameRef.current.value = "";
      dispatch(userActions.addUser(userDetails))
      localStorage.setItem("user",JSON.stringify(userDetails));
      navigate('/teams')
    }
    catch(err){
      alert(err.message);
    }
  }
  return <div id="centerer">
      <div className="container" id="signup-box">
        <form onSubmit={addNewUser}>

          <label id="signup-label"><u>Sign Up</u></label>

          <div className="form-control">
            <label htmlFor="name" className="signup-text-label">Name : </label>
            <input type="text" id="name" ref={nameRef} className='signup-text-input'/>
          </div>

          <div className="form-control">
            <label htmlFor="email" className="signup-text-label">Email : </label>
            <input type="email" id="email" ref={emailRef}  className='signup-text-input'/>
          </div>

          <div className="form-control">
            <label htmlFor="password" className="signup-text-label">Password : </label>
            <input type="password" id="password" ref={passwordRef} className='signup-text-input'/>
          </div>

          <button type="submit" id="signup-button">Sign Up</button>

        </form>
      </div>
  </div>;
}

export default SignUpBox;
