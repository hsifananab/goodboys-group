import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import FooterLogo from '../../assets/images/svg/footer-logo.svg';

import './Footer.scss';

const Footer = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <h2 className="footer__title">контакты</h2>
      <img src={FooterLogo} alt="" />
      <ul className="footer__links">
        <li>
          <a href="https://wa.me/79810417404" target="_blank">
            <AiOutlineWhatsApp />
          </a>
        </li>
        <li>
          <a href="https://t.me/goodboysgr" target="_blank">
            <FaTelegramPlane />
          </a>
        </li>
        <li>
          <div>
            <a href="mailto:hello@goodboys.group">hello@goodboys.group</a>
            <a href="tel:+79810417404">+ 7 (981) 941 74 04</a>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
