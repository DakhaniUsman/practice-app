import React, { useState } from "react";

const UseStateTwo = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function IsLoggedIn() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div>
      <h1 className="heading">Use State Two</h1>

      {loggedIn ? (
        <>
          <h2>Welcome User !</h2>
          <button className="btn" onClick={IsLoggedIn}>Log Out</button>
        </>
      ) : (
        <>
          <h2>Kindly Log In</h2>
          <button className="btn" onClick={IsLoggedIn}>Log In</button>
        
        </>
      )}

    </div>
  );
};

export default UseStateTwo;
