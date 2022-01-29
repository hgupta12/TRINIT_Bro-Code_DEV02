import React, { useRef } from "react";
import { auth, db } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection, query ,where} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-context";
function SignUpBox() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

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
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={addNewUser}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpBox;
