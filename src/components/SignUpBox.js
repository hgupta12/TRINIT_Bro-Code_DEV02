import React from 'react';

function SignUpBox() {
  return <div>
      <h1>Sign Up</h1>
      <h2>Email:</h2> <input type="text" />
      <h2>Password:</h2> <input type="text" />
      <h2>Confirm Password</h2> <input type="text" />
      <button type="submit">Sign Up</button>
  </div>;
}

export default SignUpBox;
