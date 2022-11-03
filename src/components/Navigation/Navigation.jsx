import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink className='navigation__link' to='/' end>Home</NavLink>
      <NavLink className='navigation__link' to='/starships'>Starships</NavLink>
      <NavLink className='navigation__link' to='/actors'>Actors</NavLink>
      <NavLink className='navigation__link' to='/vehicles'>Vehicles</NavLink>
    </nav>
  );
};

export default Navigation;