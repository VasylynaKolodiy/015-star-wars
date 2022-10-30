import React from 'react';
import './ActorsList.scss'
import {Link} from "react-router-dom";

const ActorsList = ({actors}) => {
  return (
    <section className='actors__list container'>
      {actors.map((actor, i) =>
        <div className='actors__item' key={i}>
          <div className="actors__wrapper">
            <img className='actors__photo'
                 src={`https://starwars-visualguide.com/assets/img/characters/${actor.url.replace(/[^0-9]/g, '')}.jpg`}
                 alt=""/>
          </div>

          <h3 className='actors__name' key={i}> {actor.name}</h3>

          <Link className='actors__link'></Link>
        </div>
      )}
    </section>
  );
};

export default ActorsList;