import React from 'react';
import noImage from "../../assets/img/Items/no-photo.jpg";
import {Link} from "react-router-dom";
import {charactersNameById} from "../helpers";

const RelatedList = ({item, key, elem}) => {
  return (

    <div className='related__description-link'>
      <div className='related__photoWrapper'>
        <img className='related__photo'
             src={`https://starwars-visualguide.com/assets/img/${key}/${elem.replace(/[^0-9]/g, '')}.jpg`}
             alt={`${item.name}`}
             onError={event => {
               event.target.src = noImage
             }}/>
      </div>

      <Link to={`/${key}/${elem.replace(/[^0-9]/g, '')}`}> </Link>

      {key === 'characters'
        ? <p className='related__description-name'> {charactersNameById[elem.replace(/[^0-9]/g, '')]}</p>
        : <p className='related__description-name'>{elem}</p>
      }

      <div className='buttons'>
        <button className='button__prev'
                onClick={() => prevPage()}>Prev
        </button>
        <button className='button__next'
                onClick={() => nextPage()}>Next
        </button>
      </div>

    </div>



  );
};

export default RelatedList;