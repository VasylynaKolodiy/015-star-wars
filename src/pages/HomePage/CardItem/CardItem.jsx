import React from 'react';
import './CardItem.scss'
import card1 from "../../../assets/img/HomePage/Cards/card1.webp";
import card2 from "../../../assets/img/HomePage/Cards/card2.jpg";
import card3 from "../../../assets/img/HomePage/Cards/card3.jpg";
import card4 from "../../../assets/img/HomePage/Cards/card4.jpeg";
import {Link} from "react-router-dom";

const CardItem = () => {
  const dataCard = [
    {
      imageUrl: card1,
      link: '/',
      title: 'Meet the Ships and Vehicles',
    },
    {
      imageUrl: card2,
      link: '/',
      title: 'Meet the Ships and Vehicles',
    },
    {
      imageUrl: card3,
      link: '/',
      title: 'Meet the Ships and Vehicles',
    },
    {
      imageUrl: card4,
      link: '/',
      title: 'Meet the Ships and Vehicles',
    },
  ]

  return (
    <div className='card'>
      <div className="card__wrapper">
        <img className="card__image" src={dataCard[0].imageUrl}/>
      </div>
      <Link className="card__link" to={dataCard[0].link}>
      </Link>

      <div className="card__content">
        <div className="card__decal-right">
        </div>
        <div className="card__decal-left">
        </div>
        <h3 className="card__title">{dataCard[0].title}</h3>
        <div className="card__gradient">
        </div>
      </div>

      <div className="card__footer">
      </div>

    </div>
  );
};

export default CardItem;