import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink className='navigation__link' to='/'>Home</NavLink>
      <NavLink className='navigation__link' to='/starships'>Starships</NavLink>
      <NavLink className='navigation__link' to='/actors'>Actors</NavLink>
    </nav>
  );
};

export default Navigation;