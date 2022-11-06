import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss'

const Navigation = ({setPageNumber}) => {
  return (
    <nav className='navigation'>
      <NavLink className='navigation__link' to='/' end>Home</NavLink>
      <NavLink className='navigation__link' to='/characters'>Characters</NavLink>
      <NavLink className='navigation__link' to='/starships'>Starships</NavLink>
      <NavLink className='navigation__link' to='/vehicles'>Vehicles</NavLink>
    </nav>
  );
};

export default Navigation;