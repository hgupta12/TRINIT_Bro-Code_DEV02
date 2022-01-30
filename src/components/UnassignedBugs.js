import React from 'react';
import BugList from './BugList';
import './UnassignedBugs.scss';

function UnassignedBugs() {
  return <div>
      <h1 id="unassignedbugs-team-title"><u>Team Avada Kedavra</u></h1>
      <h1 id="unassignedbugs-page-title"><u>Unassigned Bugs</u></h1>
            <BugList />
            <hr/>
            <BugList />
            <hr/>
            <BugList />
        </div>;
}

export default UnassignedBugs;
