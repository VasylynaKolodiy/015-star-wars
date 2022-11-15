import React from 'react';
import './NavigationModal.scss'
import {NavLink} from "react-router-dom";

const NavigationModal = ({isOpen, setIsOpen}) => {
  return (
    <nav className={`navigationModal ${isOpen ? 'open' : ''}`}>
      <div className='navigationModal__overlay' onClick={() => setIsOpen(!isOpen)}>

      </div>
      <NavLink className='navigationModal__link'
               to='/' end
               onClick={() => setIsOpen(!isOpen)}>Home</NavLink>
      <NavLink className='navigationModal__link'
               to='/characters'
               onClick={() => setIsOpen(!isOpen)}>Characters</NavLink>
      <NavLink className='navigationModal__link'
               to='/starships'
               onClick={() => setIsOpen(!isOpen)}>Starships</NavLink>
      <NavLink className='navigationModal__link'
               to='/vehicles'
               onClick={() => setIsOpen(!isOpen)}>Vehicles</NavLink>
      <NavLink className='navigationModal__link'
               to='/planets'
               onClick={() => setIsOpen(!isOpen)}>Planets</NavLink>
      <NavLink className='navigationModal__link'
               to='/species'
               onClick={() => setIsOpen(!isOpen)}>Species</NavLink>
      <NavLink className='navigationModal__link'
               to='/films'
               onClick={() => setIsOpen(!isOpen)}>Films</NavLink>
    </nav>
  );
};

export default NavigationModal;