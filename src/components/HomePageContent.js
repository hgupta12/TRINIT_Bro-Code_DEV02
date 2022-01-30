import React from 'react';
import './HomePageContent.scss';

function HomePageContent() {
  return <div id="home-page-content">
      <div id="intro">
    <h1 id="grasshopper-heading" className="home-page-text">Grasshopper</h1>
      <p className="home-page-text">Is a bug tracking system that can prioritize bugs faced by your software team through the bug reports of users from all over the world who use your software . This
helps to spot repetitive problems and concentrate on important issues. In addition to this, it improves the
team's productivity and reduces the cost of development.</p>
    </div>
      <div id="flex">
          <div className="flex-item">
                <h1 className="home-page-text"><u>Roles on Grasshopper:</u></h1>
                <ul id="homepage-list">
                    <li className="homepage-li" className="home-page-text"><div>
                        <h2>User</h2>
                        <p>Reports bugs experienced on your software</p>
                        </div></li>
                        <li className="homepage-li" className="home-page-text"><div>
                        <h2>Employee</h2>
                        <p>Resolves the bugs assigned by the Manager</p>
                        </div></li>
                        <li className="homepage-li" className="home-page-text"><div>
                        <h2>Manager</h2>
                        <p>Works on assignment of bugs among the employees</p>
                        </div></li>
                        <li className="homepage-li" className="home-page-text"><div>
                        <h2>Organizer</h2>
                        <p>Supervises the working of the entire organization</p>
                        </div></li>
                </ul>
          </div>
          <div className="flex-item">
                
          </div>
      </div>
      <h1 className="home-page-text">Start Grasshopping!</h1>
  </div>
}

export default HomePageContent;
