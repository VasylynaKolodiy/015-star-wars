import React from 'react';
import noImage from "../../assets/img/Items/no-photo.jpg";
import {Link} from "react-router-dom";
import {
  charactersNameById,
  filmsNameById,
  planetsNameById,
  speciesNameById,
  starshipsNameById,
  vehiclesNameById
} from "../../helpers";

const RelatedItem = ({item, type, elem}) => {
  return (
    <div className='related__description-link'>
      <div className='related__photoWrapper'>
        <img className='related__photo'
             src={`https://starwars-visualguide.com/assets/img/${type}/${elem.replace(/[^0-9]/g, '')}.jpg`}
             alt={`${item.name}`}
             onError={event => {
               event.target.src = noImage
             }}/>
      </div>

      <Link to={`/${type}/${elem.replace(/[^0-9]/g, '')}`}> </Link>

      {type === 'characters'
        ? <p className='related__description-name'> {charactersNameById[elem.replace(/[^0-9]/g, '')]}</p>
        : type === 'starships'
          ? <p className='related__description-name'> {starshipsNameById[elem.replace(/[^0-9]/g, '')]}</p>
          : type === 'vehicles'
            ? <p className='related__description-name'> {vehiclesNameById[elem.replace(/[^0-9]/g, '')]}</p>
            : type === 'planets'
              ? <p className='related__description-name'> {planetsNameById[elem.replace(/[^0-9]/g, '')]}</p>
              : type === 'species'
                ? <p className='related__description-name'> {speciesNameById[elem.replace(/[^0-9]/g, '')]}</p>
                : type === 'films'
                  ? <p className='related__description-name'> {filmsNameById[elem.replace(/[^0-9]/g, '')]}</p>
                  : <p className='related__description-name'>{elem}</p>
      }
    </div>

  );
};

export default RelatedItem;