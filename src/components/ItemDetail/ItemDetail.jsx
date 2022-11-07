import React from 'react';
import './ItemDetail.scss'
import noImage from "../../assets/img/Items/no-photo.jpg";
import {Link, useParams} from "react-router-dom";

const ItemDetail = ({item, itemPhoto}) => {
  let noShow = ['created', 'edited', 'url']
  let titles = ['films', 'species', 'vehicles', 'starships', 'characters', 'residents', 'planets', 'people', 'pilots']

  const params = useParams();
  return (
    <section>
      <div className="item__container container">
        <div className="item__wrapper">
          <img className='item__photo'
               src={`https://starwars-visualguide.com/assets/img/${itemPhoto}/${params.id}.jpg`}
               alt={`${item.name} photo`}
               onError={event => {
                 event.target.src = noImage
               }}/>
        </div>

        <div className="item__info">
          {Object.keys(item).map((key, index) =>
            !noShow.includes(key) && !titles.includes(key) && (
              key === 'homeworld'
                ? <p className='item__text' key={index}>
                  <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}: </span>
                  <Link className='item__text-planetLink'
                        to={`/planets/${item[key].replace(/[^0-9]/g, '')}`}>planet {item[key].replace(/[^0-9]/g, '')}</Link>
                </p>

                : <p className='item__text' key={index}>
                  <span>{key.charAt(0).toUpperCase()}{key.slice(1).replaceAll('_', ' ')}:</span> {item[key]}</p>
            )
          )
          }
        </div>
      </div>

      <div className='related container'>
        {Object.keys(item).map((key, index) =>
          titles.includes(key) && item[key].length > 0 && (
            <div className='related__info'>
              <h3>Related {key}</h3>
              {item[key].map(elem =>
                <div>
                  <Link to={`/${key}/${elem.replace(/[^0-9]/g, '')}`}> {elem} </Link>
                </div>
                )}

            </div>
          )
        )
        }
      </div>


    </section>
  );
};

export default ItemDetail;