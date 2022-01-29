import React from 'react';
import "./ReportBug.scss";

function ReportBug() {
  return <div>
        <div id="centerer">
      <div id='report-bug-container'>

          <h2 className="reportbug-box-text">Title:</h2>
          <input type="text" className="reportbug-text-box"/>

          <h2 className="reportbug-box-text">Description:</h2>
          <input type="textarea" className="reportbug-text-box" id="reportbug-description-box"/>

          <h2 className="reportbug-box-text">Seriousness: </h2>
          <div style={{"display":"flex"}}>
              <input type="checkbox" value="Low"/><p className="reportbug-checkbox">Low</p>
              <input type="checkbox" value="Medium"/><p className="reportbug-checkbox">Medium</p>
              <input type="checkbox" value="High"/><p className="reportbug-checkbox">High</p>
          </div>

          <h2 className="reportbug-box-text">Visibility: </h2>
          <div style={{"display":"flex"}}>
            <input type="checkbox" value="Public"/><p className="reportbug-checkbox">Public</p>
            <input type="checkbox" value="Hidden"/><p className="reportbug-checkbox">Hidden</p>
          </div>

      </div>
      
  </div>
  <button id="reportbug-button">Report Bug</button>
  </div>;
}

export default ReportBug;
