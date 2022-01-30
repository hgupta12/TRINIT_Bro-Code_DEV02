import React from 'react';
import "./RemoveParticipants.scss";

function RemoveParticipants() {
  return <div id="centerer">
      <div>
      <h1 id="remove-participants-heading"><u>Remove Participants</u></h1>
      <br/>
      <div id="remove-participants-container">
          <h2 id="remove-participants-text">Enter the email:   </h2>
          <input id="remove-participants-input" />
        </div>
    <button id="remove-participants-button">Remove</button>
    </div>
  </div>;
}

export default RemoveParticipants;
