import React from 'react';

const Greeting = ({ isLoggedIn, fullName }) => {
  if (isLoggedIn) {
    return <h1>Ласкаво просимо, {fullName}!</h1>;
  } else {
    return <h1>Будь ласка, увійдіть в обліковий запис.</h1>;
  }
};

export default Greeting;
