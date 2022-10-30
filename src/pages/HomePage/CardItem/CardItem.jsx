import React from 'react';
import './CardItem.scss'
import {Link} from "react-router-dom";

const CardItem = ({card}) => {

  return (
    <div className='card'>
      <div className="card__wrapper">
        <img className="card__image" src={card.imageUrl} alt='Card'/>
      </div>
      <Link className="card__link" to={card.link}>
      </Link>

      <div className="card__content">
        <div className="card__decal-right">
        </div>
        <div className="card__decal-left">
        </div>
        <h3 className="card__title">{card.title}</h3>
        <div className="card__gradient">
        </div>
      </div>

      <div className="card__footer">
      </div>
    </div>
  );
};

export default CardItem;