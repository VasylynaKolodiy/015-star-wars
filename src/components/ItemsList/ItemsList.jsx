import React from 'react';
import './ItemsList.scss'
import {Link} from "react-router-dom";
import noImage from '../../assets/img/Items/no-photo.jpg'

const ItemsList = ({items, itemUrl, itemPhoto}) => {

  return (
    <section className='items__list container'>
      {items?.map((item, i) =>
        <div className='items__item' key={i}>
          <div className="items__wrapper">
            <img className='items__photo'
                 src={`https://starwars-visualguide.com/assets/img/${itemPhoto}/${item.url.replace(/[^0-9]/g, '')}.jpg`}
                 alt={`${item.name} photo`}
                 onError={event => {event.target.src = noImage}}
            />
          </div>

          <h3 className='items__name' key={i}>{item.name}</h3>

          <Link className='items__link'
                to={`/${itemUrl}/${item.url.replace(/[^0-9]/g, '')}`}>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ItemsList;