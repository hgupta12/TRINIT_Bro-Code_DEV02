import React from 'react';
import "./ViewParticipants.scss";

function ViewParticipants() {
  return <div>
      <h1 id="team-name-heading"><u>Team Avada Kedavra</u></h1>

      <div id="managers-block">
          <h2 id="managers-heading"><u>Managers</u></h2>
          <div id="managers-table">
              <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">SL No.</h3>
                  <li className="view-participants-table-element">1</li>
                </ul>
                <ul className="view-participants-table-col" style={{"margin-right":"6rem"}}>
                  <h3 className="view-participants-table-heading">Name</h3>
                  <li className="view-participants-table-element">Ronald Richards</li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Bug Rating</h3>
                  <li className="view-participants-table-element">546</li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Bugs Left</h3>
                  <li className="view-participants-table-element">5</li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Email</h3>
                  <li className="view-participants-table-element">ronaldrichards@gmail.com</li>
                </ul>
              
          </div>
      </div>
      <hr/>
      <div id="employees-block">
          <h2 id="employees-heading"><u>Employees</u></h2>
          <div id="employees-table">
              <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">SL No.</h3>
                  <li className="view-participants-table-element"></li>
                </ul>
                <ul className="view-participants-table-col" className="view-participants-name-col">
                  <h3 className="view-participants-table-heading" style={{"margin-right":"6rem"}}>Name</h3>
                  <li className="view-participants-table-element"></li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Bug Rating</h3>
                  <li className="view-participants-table-element"></li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Bugs Left</h3>
                  <li className="view-participants-table-element"></li>
                </ul>
                <ul className="view-participants-table-col">
                  <h3 className="view-participants-table-heading">Email</h3>
                  <li className="view-participants-table-element"></li>
                </ul>
              
          </div>
      </div>
  </div>;
}

export default ViewParticipants;
