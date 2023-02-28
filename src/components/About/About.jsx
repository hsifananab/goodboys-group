import React from 'react';
import Button from '../UI/Button/Button';
import Chevron from '../UI/Chevron/Chevron';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <p className="about__text">
        Как команда профессионалов, специализирующихся на техническом
        обеспечении мероприятий, мы понимаем, что каждый проект - это уникальная
        история. Мы стремимся не просто удовлетворить потребности клиента, но и
        превзойти его ожидания.
        <br />
        Мы учитываем взгляды и бренд каждого клиента, чтобы предоставить
        решения, которые наилучшим образом соответствуют его потребностям.
        Благодаря нашим знаниям и опыту в использовании передовых технологий, мы
        поможем вам реализовать любые идеи, создавая незабываемые впечатления
        для ваших гостей.
      </p>
      <a
        className="about__download"
        download
        // target="_blank"
        href="/GOODBOYS.pptx"
      >
        {/* <img src={Download} alt="" /> */}
        <svg width="86" height="109" viewBox="0 0 86 109">
          <path
            d="M86 48.3223L76.042 38.3643L43 71.4063L9.958 38.3643L-4.97995e-06 48.3223L43 91.3223L86 48.3223Z"
            // fill="#1F1F1F"
          />
          <rect
            x="35.4351"
            width="13.6098"
            height="74.854"
            // fill="#1F1F1F"
          />
          <rect
            x="79.667"
            y="95.2686"
            width="13.6098"
            height="74.854"
            transform="rotate(90 79.667 95.2686)"
            // fill="#1F1F1F"
          />
        </svg>
        <Button>скачать презентацию</Button>
      </a>
      <Chevron height="94px" borderSize="22px" rotate="90deg" />
    </div>
  );
};

export default About;
