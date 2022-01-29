import React, { useRef, useState } from "react";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Modal from "./Modal";
import "./CreateTeamModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-context";

const JoinTeamModal = ({ isOpen, setIsOpen }) => {
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
     console.log({ ...result.data(), id: code });
     dispatch(userActions.addTeam({...result.data(), id:code}))
    codeRef.current.value = "";
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
