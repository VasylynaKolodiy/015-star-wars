import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './ItemRelatedBlock.scss'
import noImage from "../../assets/img/Items/no-photo.jpg";
import {actorsNameById, charactersNameById} from "../helpers";

const ItemRelatedBlock = ({item, titles}) => {
  const count = 5;

  let [start, setStart] = useState(0)
  let [end, setEnd] = useState(count);

  function nextPage() {
    setStart(+start + count);
    setEnd(+end + count);
  }

  function prevPage() {
    setStart(+start - count);
    setEnd(+end - count);
  }


  return (
    <div className='related container'>
      {Object.keys(item).map((key, index) =>
        titles.includes(key) && item[key].length > 0 && (
          <div className='related__description' key={index}>
            <h3 className='related__description-title'>Related {key}</h3>

            {item[key].map((elem, i) =>

              (i >= start && i < end)
                ?
                <div className='related__description-link' key={i}>
                  <div className='related__photoWrapper'>
                    <img className='related__photo'
                         src={`https://starwars-visualguide.com/assets/img/${key}/${elem.replace(/[^0-9]/g, '')}.jpg`}
                         alt={`${item.name} photo`}
                         onError={event => {
                           event.target.src = noImage
                         }}/>
                  </div>

                  <Link to={`/${key}/${elem.replace(/[^0-9]/g, '')}`}> </Link>

                  {key === 'characters'
                    ? <p className='related__description-name'> {charactersNameById[elem.replace(/[^0-9]/g, '')]}</p>
                    : <p className='related__description-name'>{elem}</p>
                  }
                </div>
                : <div></div>
            )}
            <div className='buttons'>
              <button className='button__prev'
                      onClick={() => prevPage()}>Prev
              </button>
              <button className='button__next'
                      onClick={() => nextPage()}>Next
              </button>
            </div>


          </div>
        ))}

    </div>
  );
};

export default ItemRelatedBlock;