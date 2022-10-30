import React from 'react';
import './SocialList.scss'

import {ReactComponent as Facebook} from "../../assets/img/Footer/facebook.svg";
import {ReactComponent as Instagram} from "../../assets/img/Footer/instagram.svg";
import {ReactComponent as Twitter} from "../../assets/img/Footer/twitter.svg";
import {ReactComponent as Youtube} from "../../assets/img/Footer/youtube.svg";

const SocialList = () => {

  const dataSocial = [
    {
      image: <Facebook/>,
      link: '/',
    },
    {
      image: <Instagram/>,
      link: '/',
    },
    {
      image: <Twitter/>,
      link: '/',
    },
    {
      image: <Youtube/>,
      link: '/',
    },

  ]
  return (
    <div className='social'>

      <ul className='social__list'>
        {dataSocial.map((item, i) =>
          <li className='social__item' key={i}>
            <a className='social__link' href={item.link}>
            </a>
            {item.image}
          </li>
        )}
      </ul>

      <div>
        <a className="social__kids" href="/">Kids</a>
      </div>

    </div>

  );
};

export default SocialList;