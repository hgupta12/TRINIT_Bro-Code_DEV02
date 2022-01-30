import React from 'react';
import './AddMembers.scss';

function AddMembers() {
  return <div id="addmembers-box">
      <div id="addmembers-individually-box">
          <h2 id="addmembers-individually-heading"><u>Add Members Individually</u></h2>
          <h3 id="addmembers-enteremail-label" className="addmembers-label">Enter the email:</h3>
          <input type="text" id="addmembers-email-input"/>
          <div>
              <button className="addmember-individually-button">Add as Manager</button>
              <button className="addmember-individually-button">Add as Employee</button>
          </div>
      </div>
      <hr id="addmember-divider"/>
      <div id="addmembers-bypasscode">
          <h2 id="addmembers-bypasscode-heading" className="addmembers-label"><u>Share the passcode:</u></h2>

          <h2 className="addmembers-label">Manager Passcode:</h2>
          <p className="addmembers-label" className="addmembers-key">1234567801234567890M</p>

          
          <h2 className="addmembers-label">Employee Passcode:</h2>
          <p className="addmembers-label" className="addmembers-key">1234567801234567890M</p>
      </div>
  </div>;
}

export default AddMembers;
