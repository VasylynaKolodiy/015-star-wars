import React from 'react';
import './Cards.scss'
import Button from "../../../components/Button/Button";
import CardItem from "../CardItem/CardItem";

const Cards = () => {
  return (
    <section className='cards'>
      <div className="cards__container container">
        <div className="cards__header">
          <div className="cards__header-info">
            <h2 className='cards__header-title'>
              A new era of Star Wars.
            </h2>
            <Button buttonColor='#016cf9'>Explore</Button>
          </div>
        </div>
        <div className="cards__body">
          <CardItem></CardItem>

        </div>


      </div>
    </section>
  );
};

export default Cards;