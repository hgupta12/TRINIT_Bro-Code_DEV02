import React from 'react';
import './AssignBugText.scss';

function AssignBugText() {
  return <div id="assignbug-text-container">
      <div style={{"display":"flex"}}><h2 id="assignbug-heading">Bug Title : </h2><p  id="assignbug-subheading"> Blue Moon</p></div>
      <div style={{"display":"flex"}}><h2 id="assignbug-heading">Seriousness : </h2><p id="assignbug-subheading"> High</p></div>

      <p id="assignbug-description"><u>Description:</u> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

  </div>;
}

export default AssignBugText;
