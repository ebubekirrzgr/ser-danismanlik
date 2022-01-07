import './carousel.scss';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import user from '../../assets/png/slideUser.png';
import facebook from '../../assets/png/fb.png';
import twitter from '../../assets/png/twit.png';
import instagram from '../../assets/png/ig.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Carousel() {
  return (
    <div className="carouselMainContainer">
      <div className="carouselTextContainer">
        <p className="carouselTitle">Team</p>
        <h3 className="carouselH3">Meet Our Big Family</h3>
        <p className="carouselContent">
          Ullamco id est eu ad culpa laborum. In sit est velit et nostrud ad
          officia officia ex aliqua elit.
        </p>
      </div>
      <div className="swiperMainContainer">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideContainer">
              <div className="slideUser">
                <img src={user} alt="user" />
              </div>
              <div className="slideTextContainer">
                <h4 className="slideH4">Annette Hawkins</h4>
                <p className="slideP">Art Director of Gillette</p>
                <div className="slideSocialMediaContainer">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideContainer">
              <div className="slideUser">
                <img src={user} alt="user" />
              </div>
              <div className="slideTextContainer">
                <h4 className="slideH4">Annette Hawkins</h4>
                <p className="slideP">Art Director of Gillette</p>
                <div className="slideSocialMediaContainer">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideContainer">
              <div className="slideUser">
                <img src={user} alt="user" />
              </div>
              <div className="slideTextContainer">
                <h4 className="slideH4">Annette Hawkins</h4>
                <p className="slideP">Art Director of Gillette</p>
                <div className="slideSocialMediaContainer">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
