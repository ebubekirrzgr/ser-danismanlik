import './login.scss';

import React from 'react';

import JoinUs from './JoinUs';
import Subscribe from './Subscribe';

function Login() {
  return (
    <div className="loginContainer">
      <JoinUs />
      <Subscribe />
    </div>
  );
}

export default Login;
