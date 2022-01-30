import React, { useRef, useState } from "react";
import { db } from "../firebase-config";
import { doc, getDoc,collection,query,where,getDocs,updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import "./CreateTeamModal.scss";
import { useDispatch,useSelector } from "react-redux";
import { userActions } from "../store/user-context";

const JoinTeamModal = ({ isOpen, setIsOpen }) => {
  const userCtx = useSelector(state=>state.user);
const dispatch = useDispatch();
  const codeRef = useRef();
  const closeModal = () => {
    setIsOpen(false);
  };

  const joinTeam = async (e) => {
    e.preventDefault();
    const code = codeRef.current.value;
    const teamRef = doc(db,'teams', code.substring(0, code.length));
     const result = await getDoc(teamRef);
     dispatch(userActions.addTeam({...result.data(), id:code}))
    codeRef.current.value = "";
    const userRef = collection(db,'users');
            const q = query(userRef, where("id", "==", userCtx.id));
            const docSnap = await getDocs(q);
            const docRef = doc(db,'users',docSnap.docs[0].id); 
            if (docSnap.docs[0].data().teams) {
              await updateDoc(docRef, {
                teams: [
                  ...docSnap.docs[0].data().teams,
                  {...result.data(), id:code },
                ],
              });
            } else {
              await updateDoc(docRef, {
                teams: [result.data()],
              });
            }
  };

  if (!isOpen) return null;
  return (
    <Modal heading="Join Team" closeModal={closeModal}>
      <form className="form" onSubmit={joinTeam}>
        <div className="form-control">
          <label htmlFor="name">Invite Code:</label>
          <input
            type="text"
            id="name"
            placeholder="e.g Dumbelore's Army"
            ref={codeRef}
          />
        </div>
        <button type="submit">Join</button>
      </form>
    </Modal>
  );
};

export default JoinTeamModal;
