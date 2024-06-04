import React, { useState } from 'react';
import Greeting from './Greeting';

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fullName = "Бред Пітт";

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>Logout</button>;
  } else {
    button = <button onClick={handleLoginClick}>Login</button>;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} fullName={fullName} />
      {button}
    </div>
  );
};

export default LoginControl;
