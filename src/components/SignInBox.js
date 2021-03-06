import React, { useRef } from "react";
import { auth, db } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, query ,where} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-context";
import { useNavigate } from "react-router-dom";
import "./SignInBox.scss";
function SignUpBox() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const addNewUser = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const userCreds = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      emailRef.current.value = "";
      passwordRef.current.value = "";
      // fetching userName
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("id", "==" , userCreds.user.uid))
     const docSnap =  await getDocs(q);
    //  console.log(docSnap.docs[0].data());
      const userDetails = {
        email,
        id: userCreds.user.uid,
        name: docSnap.docs[0].data().name
      }
      dispatch(userActions.addUser(userDetails));
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate('/teams');
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div id="centerer">
      <div className="container" id="signin-box">
        <form onSubmit={addNewUser}>
          <h2 id="signin-label"><u>Sign In</u></h2>

          <div className="form-control">
            <label htmlFor="email" className="signin-text-label">Email: </label>
            <input type="email" id="email" ref={emailRef}  className='signin-text-input'/>
          </div>

          <div className="form-control">
            <label htmlFor="password" className="signin-text-label">Password: </label>
            <input type="password" id="password" ref={passwordRef}  className='signin-text-input'/>
          </div>

          <button type="submit" id="signin-btn">Sign In</button>

        </form>
      </div>
    </div>
  );
}

export default SignUpBox;
