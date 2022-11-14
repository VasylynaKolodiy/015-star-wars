import React from 'react';
import SliderInfo from "./SliderInfo/SliderInfo";
import Cards from "./Cards/Cards";

const HomePage = () => {
  return (
    <main className='homePage'>
      <SliderInfo/>
      <Cards/>
    </main>
  );
};

export default HomePage;