import React from 'react';
import './ItemDetail.scss'
import noImage from "../../assets/img/Items/no-photo.jpg";
import {useParams} from "react-router-dom";

const ItemDetail = ({item, itemPhoto}) => {
  const params = useParams();
  return (
    <section className="item__container container">
      <div className="item__wrapper">
        <img className='item__photo'
             src={`https://starwars-visualguide.com/assets/img/${itemPhoto}/${params.id}.jpg`}
             alt={`${item.name} photo`}
             onError={event => {event.target.src = noImage}}/>
      </div>

      <div className="item__info">
        {Object.keys(item).map((key, index) =>
          <p className='item__text' key={index}>
            <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}:</span> {item[key]}
          </p>
        )}
      </div>
    </section>
  );
};

export default ItemDetail;