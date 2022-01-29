import React, { useRef, useState } from 'react';
import { db } from '../firebase-config';
import {collection,addDoc} from 'firebase/firestore'
import Modal from './Modal';
import './CreateTeamModal.scss';
import { useDispatch ,useSelector } from 'react-redux';
import { userActions } from '../store/user-context';


const CreateTeamModal = ({isOpen,setIsOpen}) => {
    const dispatch = useDispatch();

    const userCtx = useSelector(state=> state.user);

    const nameRef = useRef();
    const descRef = useRef();
    const [inviteId,setInviteId] = useState(null);
    const closeModal = ()=>{
        setIsOpen(false);
    }

    const createTeam = async(e) =>{
        e.preventDefault()
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const teamRef = collection(db,'teams');
        try{
            const results = await addDoc(teamRef,{
                name,
                desc,
                authorId: userCtx.id
            });
            setInviteId(results.id);
            dispatch(userActions.addTeam({name,desc,id:results.id, authorId:userCtx.id}))
        }catch(err){
            alert(err.message);
        }
        nameRef.current.value ='';
        descRef.current.value ='';
    }

    if(!isOpen)
        return null
    if(inviteId){
        return (
            <Modal heading="Team created!" closeModal={closeModal}>
                <div className="passcode-container">
                    <h2>Manager Code:</h2>
                    <p>{`${inviteId}M`}</p>
                    <h2>Employee Code:</h2>
                    <p>{`${inviteId}E`}</p>
                </div>
            </Modal>
        )
    }
  return (
  <Modal heading="New Team" closeModal={closeModal}>
      <form className='form' onSubmit={createTeam} >
          <div className="form-control">
              <label htmlFor="name">Team Name:</label>
              <input type="text" id='name' placeholder="e.g Dumbelore's Army" ref={nameRef} />
          </div>
          <div className="form-control">
              <label htmlFor="desc">Description:</label>
              <textarea id="desc" placeholder='tell us about ur team!' ref={descRef} />
          </div>
          <button type="submit">Create</button>
      </form>
  </Modal>
  )
};

export default CreateTeamModal;
