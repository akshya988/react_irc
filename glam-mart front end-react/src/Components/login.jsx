import React, { useState } from 'react';

const LoginButton = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating login logic (toggle between logged in and logged out)
    setLoggedIn(prevLoggedIn => !prevLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;
