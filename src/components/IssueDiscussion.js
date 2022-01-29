import React from 'react';
import Comment from './Comment';

function IssueDiscussion(){
    return (<div>
        <Comment />
        <Comment />


        <input type="text" value="Enter your comment here..."/>
        <button>Add Comment</button>
    </div>);
}

export default IssueDiscussion;