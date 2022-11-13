import React from 'react';
import './Cards.scss'
import Button from "../../../components/Button/Button";
import CardItem from "../CardItem/CardItem";
import card1 from "../../../assets/img/HomePage/Cards/card1.webp";
import card2 from "../../../assets/img/HomePage/Cards/card2.jpg";
import card3 from "../../../assets/img/HomePage/Cards/card3.jpg";
import card4 from "../../../assets/img/HomePage/Cards/card4.jpeg";
import Skeleton from "@mui/material/Skeleton";

const Cards = () => {
  const dataCard = [
    {
      imageUrl: card1,
      link: '/',
      title: 'Meet the Ships and Vehicles',
    },
    {
      imageUrl: card2,
      link: '/',
      title: 'Meet the Droids',
    },
    {
      imageUrl: card3,
      link: '/',
      title: 'Meet the Heroes',
    },
    {
      imageUrl: card4,
      link: '/',
      title: 'Meet the Villains',
    },
  ]

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
          <div className="cards__list">
            {dataCard.map((card, i) =>
              <CardItem imageUrl={card.imageUrl} link={card.link} title={card.title} key={i}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;