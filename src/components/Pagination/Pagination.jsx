import React, {useState} from 'react';
import './Pagination.scss'

const Pagination = ({pages, pageNumber, setPageNumber}) => {
  return (
    <ul className='pagination'>
      {pages.map(page =>
        <li className={`pagination__item ${pageNumber === +page + 1 && 'active'}`}
            key={page}
            onClick={() => setPageNumber(+page + 1)}>
          {+page + 1}</li>
      )}
    </ul>
  );
};

export default Pagination;