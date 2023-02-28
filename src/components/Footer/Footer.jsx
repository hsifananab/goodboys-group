import React from 'react';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
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
          <a href="https://instagram">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="">
            <AiOutlineWhatsApp />
          </a>
        </li>
        <li>
          <a href="">
            <FaTelegramPlane />
          </a>
        </li>
        <li>
          <div>
            <a href="mailto:hello@goodboys.group">hello@goodboys.group</a>
            <a href="tel:+79313909991">+ 7 (931) 390 99 91</a>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
