import React from 'react';
import './CardItem.scss'
import {Link} from "react-router-dom";
import noImage from '../../../assets/img/Items/no-photo.jpg'

const CardItem = ({imageUrl, link, title}) => {
  return (
    <div className='card'>
      <div className="card__wrapper">
        <img className="card__image"
             src={imageUrl}
             onError={event => {
               event.target.src = noImage
             }}
             alt='Card'/>
      </div>
      <Link className="card__link" to={link}>
      </Link>

      <div className="card__content">
        <div className="card__decal-right">
        </div>
        <div className="card__decal-left">
        </div>
        <h3 className="card__title">{title}</h3>
        <div className="card__gradient">
        </div>
      </div>

      <div className="card__footer">
      </div>
    </div>
  );
};

export default CardItem;