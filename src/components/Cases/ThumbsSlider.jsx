import React from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { thumbs } from '../../data/data';
import { useStateContext } from '../../context/ContextProvider';

import './ThumbsSlider.scss';

const ThumbsSlider = () => {
  const { activeThumb, handleActiveThumb } = useStateContext();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={49}
        slidesPerView={4}
        className="thumbs"
      >
        {thumbs.map((thumb, index) => (
          <SwiperSlide key={index} onClick={() => handleActiveThumb(index)}>
            <ThumbsSlide
              thumb={thumb}
              index={index}
              isActive={activeThumb === index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ThumbsSlider;

const ThumbsSlide = ({ isActive, index, thumb }) => {
  return (
    <div className="thumbs__slide">
      <p>
        0{index + 1}/0{thumbs.length}{' '}
      </p>
      <div>
        <img
          src={thumb.image}
          alt={thumb.name}
          style={{ opacity: isActive ? '1' : '.3' }}
        />
      </div>
    </div>
  );
};
