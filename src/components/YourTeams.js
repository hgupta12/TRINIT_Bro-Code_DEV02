import React,{useState} from 'react';
import CreateTeamModal from './CreateTeamModal';
import JoinTeamModal from './JoinTeamModal';
import './YourTeams.scss';

function YourTeams() {
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenJoin, setIsOpenJoin] = useState(false);

  return <div>
      <button id="create-team-btn" onClick={()=>setIsOpenCreate(true)}>Create Team</button>
      <button id="create-team-btn" onClick={()=>setIsOpenJoin(true)}>Join Team</button>
        <CreateTeamModal isOpen={isOpenCreate} setIsOpen={setIsOpenCreate}/>
        <JoinTeamModal isOpen={isOpenJoin} setIsOpen={setIsOpenJoin}/>
      <h2 id="your-teams-heading"><u>Your teams:</u></h2>

      <div id="teams-table-container">
          <ul className="teams-table-col">
              <h3 className="teams-table-heading">Serial no.</h3>
                <li className="teams-table-elements">1</li>
          </ul>
          <ul className="teams-table-col" id="team-name-list">
              <h3 className="teams-table-heading">Team Name</h3>
              <li className="teams-table-elements">Avada Kedavra</li>
          </ul>
          <ul className="teams-table-col" id="position-list">
              <h3 className="teams-table-heading">Position</h3>
              <li className="teams-table-elements">Organizer</li>
          </ul>
          <ul className="teams-table-col">
              <h3 className="teams-table-heading">Open Issues</h3>
              <li className="teams-table-elements">3</li>
          </ul>
      </div>
  </div>;
}

export default YourTeams;
