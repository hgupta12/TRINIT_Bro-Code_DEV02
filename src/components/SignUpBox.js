import React,{useRef} from 'react';
import {auth,db} from '../firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {collection, addDoc } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import {userActions} from '../store/user-context';
function SignUpBox() {
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
    }
    catch(err){
      alert(err.message);
    }
  }
  return <div>
      <div className="container">
        <form onSubmit={addNewUser}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameRef} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef}/>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
  </div>;
}

export default SignUpBox;
