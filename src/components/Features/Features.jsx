import './features.scss';
import React from 'react';
import { Button } from 'react-bootstrap';
import Package from '../../assets/png/Group 2.png';
import Frame from '../../assets/png/Frame 2.png';

function Features() {
  return (
    <div>
      <div className="features-container">
        <div className="page-merger" />
        <div className="features-text">
          <h3 className="features-h3">
            App Features Your Customers Want. That Make a Really Great App
          </h3>
          <p className="features-p">
            The world today seems to run on apps. If it is something that people
            can interact with, then it’s likely that there is an app available
            for it.{' '}
          </p>
          <Button className="btn btn-blue">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
        <div className="features-boxes">
          <div>
            <div className="box-container">
              <img src={Package} alt="Package" />
              <h5 className="box-h5">Headline Goes Here</h5>
              <p className="box-p">
                If it is something that people can interact with, then it’s
                likely that there is an app available for it.{' '}
              </p>
            </div>
            <div className="box-container">
              <img src={Package} alt="Package" />
              <h5 className="box-h5">Headline Goes Here</h5>
              <p className="box-p">
                If it is something that people can interact with, then it’s
                likely that there is an app available for it.{' '}
              </p>
            </div>
          </div>
          <div>
            <div className="box-container">
              <img src={Package} alt="Package" />
              <h5 className="box-h5">Headline Goes Here</h5>
              <p className="box-p">
                If it is something that people can interact with, then it’s
                likely that there is an app available for it.{' '}
              </p>
            </div>
            <div className="box-container">
              <img src={Package} alt="Package" />
              <h5 className="box-h5">Headline Goes Here</h5>
              <p className="box-p">
                If it is something that people can interact with, then it’s
                likely that there is an app available for it.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features-image">
        <img src={Frame} alt="frame2" />
      </div>
    </div>
  );
}

export default Features;
