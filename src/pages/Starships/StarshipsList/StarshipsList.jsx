import React from 'react';
import './StarshipsList.scss'

const StarshipsList = ({starships}) => {
  return (
    <section className='starships__list container'>
      {starships.map((starship, i) =>
        <div className='starships__item' key={i}>
       
          <h3 className='starships__name' key={i}> {starship.name}</h3>
          
        </div>
      )}
    </section>
  );
};

export default StarshipsList;