import React from 'react';
import noImage from "../../assets/img/Items/no-photo.jpg";
import {Link} from "react-router-dom";
import {planetsNameById} from "../../helpers";

const ItemInfoBlock = ({item, itemPhoto, params, noShow, titles}) => {

  return (
    <div className='item__container container'>
      <div className="item__wrapper">
        <img className='item__photo'
             src={`https://starwars-visualguide.com/assets/img/${itemPhoto}/${params.id}.jpg`}
             alt={`${item.name}`}
             onError={event => {
               event.target.src = noImage
             }}/>
      </div>

      <div className="item__info">
        {Object.keys(item).map((key, index) =>
          !noShow.includes(key) && !titles.includes(key) && (
            key === 'homeworld' && item[key]
              ? <p className='item__text' key={index}>
                <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}: </span>
                <Link className='item__text-planetLink'
                      to={`/planets/${item[key].replace(/[^0-9]/g, '')}`}>{planetsNameById[item[key].replace(/[^0-9]/g, '')]}</Link>
              </p>

              : <p className='item__text' key={index}>
                <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}:</span> {item[key]}</p>
          ))}
      </div>
    </div>
  );
};

export default ItemInfoBlock;