import React from 'react';
import Bug from './Bug';
import './BugList.scss';

function BugList() {
  return <div>
      <h1 id="buglist-seriousness-title"><u>Seriousness - High</u></h1>
      <div id="buglist-table-container">
        
        <ul>
            <li className="buglist-table-text">
                <Bug />
            </li>
            <li className="buglist-table-text">
                <Bug />
            </li>
        </ul>
      </div>
  </div>;
}

export default BugList;
