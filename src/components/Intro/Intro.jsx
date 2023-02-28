import React from 'react';
import Chevron from '../UI/Chevron/Chevron';
import LogoTitle from '../../assets/images/svg/logo-title.svg';

import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <Chevron height="221px" borderSize="51px" rotate="0deg" />
        <img src={LogoTitle} alt="" />
      </div>
    </div>
  );
};

export default Intro;
