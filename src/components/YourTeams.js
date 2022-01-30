import React,{useEffect, useState} from 'react';
import CreateTeamModal from './CreateTeamModal';
import JoinTeamModal from './JoinTeamModal';
import {useSelector} from 'react-redux';
import './YourTeams.scss';
import { collection, getDocs, where,query } from 'firebase/firestore';
import { db } from '../firebase-config';

function YourTeams() {
    const userCtx = useSelector(state=> state.user);
    const [teams,setTeams] = useState(null);
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenJoin, setIsOpenJoin] = useState(false);

    useEffect(()=>{
        const getTeams = async ()=>{
            const userRef = collection(db,"users");
            const q = query(userRef, where('id','==',userCtx.id));
            const data = await getDocs(q);
            console.log(data);
            console.log(data.docs[0].data().teams);
            const list =  data.docs[0].data().teams.map((team,value)=>{
               return (
                 <tr key={value}>
                   <td>{value+1}</td>
                   <td>{team.name}</td>
                   <td>{team.authorId === userCtx.id?'Creator':"Member"}</td>
                   <td>-</td>
                 </tr>
               );
           })
           setTeams(list);
            
        }
    getTeams();
},[])
  return (
    <div>
      <button id="create-team-btn" onClick={() => setIsOpenCreate(true)}>
        Create Team
      </button>
      <button id="create-team-btn" onClick={() => setIsOpenJoin(true)}>
        Join Team
      </button>
      <CreateTeamModal isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
      <JoinTeamModal isOpen={isOpenJoin} setIsOpen={setIsOpenJoin} />
      <h2 id="your-teams-heading">
        <u>Your teams:</u>
      </h2>

      <table id="teams">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Team Name</th>
            <th>Role</th>
            <th>Open Issues</th>
          </tr>
        </thead>
        <tbody>
          {teams ? (
            teams
          ) : (
            <tr>
              <td colSpan={4}>No teams available!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default YourTeams;
