import React from 'react';
import "./EnterTeamDetails.scss";

function EnterTeamDetails() {
  return <div id="enterteamdetails-box">
      <h1 id="enterteamdetails-heading"><u>Enter team details:</u></h1>

      <div>
          <h2 className="enterteamdetails-label">Team name:</h2>
            <input type="text" className="enterteamdetails-input" />
      </div>
      <div>
            <h2 className="enterteamdetails-label">Description:</h2>
            <textarea className="enterteamdetails-input" id="enterteamdetails-textarea"/>
      </div>

    <button id="enterteamdetails-proceed-button">Proceed</button>
  </div>;
}

export default EnterTeamDetails;
