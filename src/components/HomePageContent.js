import React from 'react';
import './HomePageContent.scss';

function HomePageContent() {
  return <div id="home-page-content">
      <h1 className="home-page-text">About Grasshopper and its services</h1>
      <div id="flex">
          <div className="flex-item">
                <h2 className="home-page-text">Role of a/an:</h2>
                <ul>
                    <li className="home-page-text">Organizer</li>
                    <li className="home-page-text">Manager</li>
                    <li className="home-page-text">Employee</li>
                    <li className="home-page-text">User</li>
                </ul>
          </div>
          <div className="flex-item">
                <h2 className="home-page-text">Put image here</h2>
          </div>
      </div>
      <h1 className="home-page-text">Start Grasshopping!</h1>
  </div>
}

export default HomePageContent;
