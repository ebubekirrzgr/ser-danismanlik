import './join-us.scss';
import React from 'react';

import facebookBlue from '../../../assets/png/facebookBlue.png';

import { Form, Button } from 'react-bootstrap';

function JoinUs() {
  return (
    <div className="joinUsContainer">
      <div className="joinUsWrapper">
        <div className="joinUsTextContainer">
          <h4 className="joinUsH4">Join us today !</h4>
          <p className="joinUsP">
            Create your account now. And join our community, it’s free
          </p>
        </div>

        <div className="joinUsForm">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Mail</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I gree" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create accounts
            </Button>
          </Form>
          <p className="formForgotP">Forgot password?</p>
        </div>
        <div className="formLineContainer">
          <span className="formLine1" />
          <p className="signUpP">or sign up with</p>
          <span className="formLine2" />
        </div>
        <div className="formFacebook">
          <button className="facebookButton">
            <span className="facebookIcon">
              <img src={facebookBlue} alt="facebookBlue" />
            </span>{' '}
            <p className="facebookP">Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
