import './login.scss';

import React from 'react';

import JoinUs from '../../components/Login/JoinUs';
import Subscribe from '../../components/Login/Subscribe';

function Login() {
  return (
    <div className="loginContainer">
      <JoinUs />
      <Subscribe />
    </div>
  );
}

export default Login;
