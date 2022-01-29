import React from 'react';


function IssueDescription() {

    const issue_id =1;//Takes in the int
    const issue_title = "Test Title";//str
    const description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";//str
    const status = "";//Assigned to whom
    const raised_by ="Test Raiser";//str
    const created_at = "23:06:59 29/01/2022";//convert datetime to str beforehand
    const tags = ["ui","frontend"];//array of strings

  return <div>
      <h1><u>#{issue_id}:{issue_title}</u></h1>
      <h3>{description}</h3>
      <h2>{(status) === ""? "Unassigned":"Assigned to "+status}</h2>
      <h2>Raised by: {raised_by}</h2>
      <h2>Created At:{created_at}</h2>
      

  </div>;
}

export default IssueDescription;
