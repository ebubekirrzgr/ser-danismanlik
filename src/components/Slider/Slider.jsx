import './slider.scss';

import React, { useState } from 'react';

import comma from '../../assets/png/Vector.png';
import rightArrow from '../../assets/png/right.png';
import leftArrow from '../../assets/png/left.png';
import user from '../../assets/png/user.png';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="sliderMainContainer">
      <div className="testimonialContainer">
        <p className="testimonialTitle">Testimonial</p>
        <h3 className="testimonialH3">In Their Own Words</h3>
        <p className="testimonialContent">
          Online businesses utilize newsletters to keep their brand top-of-mind
          for consumers, establishing authority.
        </p>
      </div>
      <section className="slider">
        <div className="sliderButtons">
          <img
            src={leftArrow}
            onClick={prevSlide}
            alt="leftArrow"
            className="leftArrow"
          />
          <img
            src={rightArrow}
            onClick={nextSlide}
            alt="rightArrow"
            className="rightArrow"
          />
        </div>

        {slides.map((slide, index) => {
          return (
            <div key={index} className="sliderContainer">
              <div className={index === current ? 'slide active' : 'slide off'}>
                <div className="sliderImage">
                  <img src={user} alt="user" />
                </div>
                <div className="sliderData">
                  <div className="commaContainer">
                    <img src={comma} alt="comma" />
                  </div>
                  {index === current && (
                    <>
                      <div className="sliderTextContainer">
                        <p className="sliderMainP">{slide.content}</p>
                        <h6 className="sliderH6">{slide.writer}</h6>
                        <p className="sliderP2">{slide.job}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Slider;
