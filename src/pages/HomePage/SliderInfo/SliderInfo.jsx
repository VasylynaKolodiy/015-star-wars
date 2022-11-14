import React from 'react';
import './SliderInfo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage1 from '../../../assets/img/HomePage/SliderInfo/slider1.jpg';
import sliderImage2 from '../../../assets/img/HomePage/SliderInfo/slider2.jpg';
import sliderImage3 from '../../../assets/img/HomePage/SliderInfo/slider3.jpg';
import Button from "../../../components/Button/Button";

const SliderInfo = () => {

  const dataSlider = [
    {
      imageUrl: sliderImage1,
      title: 'WHAT’S THE GREATEST SHIP DESIGN IN STAR WARS?',
      description: 'Learn about the secrets of star wars ships.',
      buttonName: 'Learn more',
      textColor: 'white',
      buttonColor: '#016cf9',
    },

    {
      imageUrl: sliderImage2,
      title: 'STAR WARS INSIDE INTEL: THE PILOTS',
      description: 'Jump into the cockpit for a dogfight of words.',
      buttonName: 'More details',
      textColor: 'black',
      buttonColor: '#d57026',
    },

    {
      imageUrl: sliderImage3,
      title: 'HEROES OF STAR WARS',
      description: 'We are all the Republic. Meet the actors behind-the-scenes.',
      buttonName: 'Read now',
      textColor: 'black',
      buttonColor: '#dcae50',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    customPaging: i => <div className='sliderInfo__dots'>
      <div className='sliderInfo__dots-progressbar' style={{backgroundColor: dataSlider[i].buttonColor}}>
      </div>
      <p className='sliderInfo__dots-title'>{dataSlider[i].title}</p>
      <img className='sliderInfo__dots-image' src={dataSlider[i].imageUrl} alt='Dots'/>
    </div>,
  };

  return (
    <section className='sliderInfo'>
      <ul className="sliderInfo__wrapper">
        <Slider {...settings}>
          {dataSlider.map((item, i) =>
            <li className="sliderInfo__item" key={i}>
              <div className='sliderInfo__container container'>
                <h2 className='sliderInfo__title' style={{color: item.textColor}}>
                  {item.title}
                </h2>
                <p className='sliderInfo__description' style={{color: item.textColor}}>
                  {item.description}
                </p>
                <Button buttonColor={item.buttonColor}>
                  {item.buttonName}
                </Button>
                <img className='sliderInfo__image' src={item.imageUrl} alt='Slider info'/>
              </div>
            </li>
          )}
        </Slider>
      </ul>
    </section>
  );
};

export default SliderInfo;