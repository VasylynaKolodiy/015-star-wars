import React from 'react';
import './Footer.scss'
import SocialList from "../SocialList/SocialList";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__overlay">
      </div>
      <div className="footer__social">
        <p className="footer_title">
          FOLLOW STAR WARS:
        </p>
        <SocialList/>
      </div>

      <div className="footer__info">
        <p className="footer__copy">
          TM & © Lucasfilm Ltd. All Rights Reserved
        </p>

        <ul className="footer__legals">
          <li className='footer__legalItem'>
            <a href='/'>Terms of Use</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Additional Content Information</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Privacy Policy</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Children’s Online Privacy Policy</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Your California Privacy Rights</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Star Wars at shopDisney</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Star Wars Helpdesk</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Interest-Based Ads</a>
          </li>
          <li className='footer__legalItem'>
            <a href='/'>Do Not Sell My Personal Information</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;