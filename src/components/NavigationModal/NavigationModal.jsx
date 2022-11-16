import React from 'react';
import './NavigationModal.scss'
import {NavLink} from "react-router-dom";

const NavigationModal = ({isOpen, openMenu}) => {
  return (
    <nav className={`navigationModal ${isOpen ? 'open' : ''}`}>
      <div className='navigationModal__overlay' onClick={() => openMenu()}>

      </div>
      <NavLink className='navigationModal__link'
               to='/' end
               onClick={() => openMenu()}>Home</NavLink>
      <NavLink className='navigationModal__link'
               to='/characters'
               onClick={() => openMenu()}>Characters</NavLink>
      <NavLink className='navigationModal__link'
               to='/starships'
               onClick={() => openMenu()}>Starships</NavLink>
      <NavLink className='navigationModal__link'
               to='/vehicles'
               onClick={() => openMenu()}>Vehicles</NavLink>
      <NavLink className='navigationModal__link'
               to='/planets'
               onClick={() => openMenu()}>Planets</NavLink>
      <NavLink className='navigationModal__link'
               to='/species'
               onClick={() => openMenu()}>Species</NavLink>
      <NavLink className='navigationModal__link'
               to='/films'
               onClick={() => openMenu()}>Films</NavLink>
    </nav>
  );
};

export default NavigationModal;