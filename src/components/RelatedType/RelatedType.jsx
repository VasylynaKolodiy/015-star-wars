import React, {useState} from 'react';
import RelatedItem from "../RelatedItem/RelatedItem";
import {ReactComponent as Arrow} from '../../assets/img/Items/arrow.svg';

const RelatedType = ({item, type}) => {
  const count = 5;

  let [startList, setStartList] = useState(0);
  let [endList, setEndList] = useState(count);

  function nextPage() {
    setStartList(+startList + count);
    setEndList(+endList + count);
  }

  function prevPage() {
    setStartList(+startList - count);
    setEndList(+endList - count);
  }

  return (
    <div className='related__description'>
      <h3 className='related__description-title'>Related {type}</h3>

      {item[type].length > 0 && item[type].slice(startList, endList).map((elem, i) =>
        <RelatedItem
          type={type === 'people' ? 'characters'
            : type === 'residents' ? 'characters'
              : type === 'pilots' ? 'characters' : type}
          item={item}
          elem={elem}
          key={i}/>
      )}

      <div className='buttons'>
        {startList > 0 && <Arrow className='button__prev'
                                 onClick={() => prevPage()}/>}
        {item[type].length > endList && <Arrow className='button__next'
                                               onClick={() => nextPage()}/>}
      </div>
    </div>
  );
};

export default RelatedType;