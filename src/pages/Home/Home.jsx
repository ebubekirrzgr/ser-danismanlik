import './home.scss';
import React from 'react';

import Navbar from '../../components/Navbar';
import MainContainer from '../../components/MainContainer';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider/Slider';
import SliderData from '../../components/Slider/SliderData';

function index() {
  return (
    <div className="homeContainer">
      <div className="top-left-rectangle" />
      <div className="homeHeader">
        <div className="homeWrapper">
          <Navbar />
          <MainContainer />
        </div>
        <div className="featuresWrapper">
          <Features />
        </div>
        <div className="sliderWrapper">
          <Slider slides={SliderData}></Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
