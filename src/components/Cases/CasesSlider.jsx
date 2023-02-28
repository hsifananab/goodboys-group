import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cases } from '../../data/data';

import './CasesSlider.scss';

const CasesSlider = ({ index }) => {
  const item = cases[index];

  return (
    <div className="cases">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ type: 'custom' }}
        className="cases__slider"
      >
        {item.images?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={slide} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="cases__content">
        <h5 className="cases__content-title">{item.title}</h5>
        <p className="cases__content-text">{item.text}</p>
      </div>
    </div>
  );
};

export default CasesSlider;
