import React from 'react';


function IssueDescription() {

    const issue_id;//Takes in the int
    const issue_title;//str
    const description;//str
    const status;//Assigned to whom
    const raised_by;//str
    const created_at;//convert datetime to str beforehand
    const tags;//array of strings

  return <div>
      <h1><u>#{issue_id}:{issue_title}</u></h1>
      <h3>{description}</h3>
      <h2>{(status) === ""? "Unassigned":"Assigned to "+status}</h2>
      <h2>Raised by: {raised_by}</h2>
      <h2>Created At:{created_at}</h2>
      <h2>Tags: {...tags}</h2>

  </div>;
}

export default IssueDescription;
