import React, { useContext } from 'react';
import UserContext from './UserContext'; // Assuming UserContext.js is in the same directory

function Profile2() {
  // Use useContext to access the status from UserContext
  const { status } = useContext(UserContext);

  return (
    <div>
      <h2>Profile2</h2>
      <p>Status: {status}</p> 
    </div>
  );
}

export default Profile2;