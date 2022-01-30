import React from 'react';
import "./PendingBugRedirect.scss";

function PendingBugsRedirect() {
  return <div id="pendingbug-redirect-box">
    <div id="pendingbug-redirect-button-container">
    <button className="pendingbug-redirect-button" id="pendingbug-redirect-button-first">View Participants</button>
    <button className="pendingbug-redirect-button">Report Bugs</button>
    <button className="pendingbug-redirect-button" id="pendingbug-redirect-button-third">Assign New Bugs</button>
    </div>
  </div>;
}

export default PendingBugsRedirect;
