import React from 'react';
import './ItemRelatedBlock.scss'
import RelatedType from "../RelatedType/RelatedType";

const ItemRelatedBlock = ({item, titles}) => {

  return (
    <div className='related container'>
      {Object.keys(item).map((type, index) =>

        titles.includes(type) && item[type].length > 0 && (
            <RelatedType item={item}
                         type={type}
                         key={index} />

        )
      )}
    </div>
  )
};

export default ItemRelatedBlock;