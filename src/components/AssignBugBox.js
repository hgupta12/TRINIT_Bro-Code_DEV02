import React from 'react';
import './AssignBugBox.scss';

function AssignBugBox() {
  return <div id="assignbug-box">
      <h1 id="assignbug-box-title"><u>Assign Bug</u></h1>
      <div id='assignbug-box-form'>
          <div className="assignbug-sub-box">
              <h2 className="assignbug-form-label">Email:</h2>
              <input type="text" className="assignbug-form-input"/>
          </div>
          <div>
              <h2 className="assignbug-form-label">Deadline:</h2>
              <input type="text" className="assignbug-form-input" />
          </div>
          <button id="assignbug-form-submit">Assign</button>
      </div>

  </div>;
}

export default AssignBugBox;
