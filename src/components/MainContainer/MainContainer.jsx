import './main-container.scss';
import React from 'react';
import { Button } from 'react-bootstrap';
import imgPlaceholder from '../../assets/png/img_placeholder.png';

function MainContainer() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="textContainer">
          <h1 className="headerContainerTitle">
            head of a newspaper <span className="h1Line">story.</span>
          </h1>
          <p className="headContainerP">
            What &apos; a resume headline, and how can it help you showcase your
            credentials? A resume headline (also known as a resume title) is a
            brief phrase that highlights your value as a candidate
          </p>
          <div className="headerButtons">
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
            <Button className="btn btn-white">
              Action Links
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
          <div className="headerContainerInfo">
            <h6 className="headerContainerInfoH">
              Need more some information?
            </h6>
            <Button className="btn-route">Learn more</Button>
          </div>
        </div>
        <div className="imageContainer">
          <img src={imgPlaceholder} alt="imgPlaceholder" />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
