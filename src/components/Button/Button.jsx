import React from 'react';
import './Button.scss'

const Button = ({children, ...props}) => {
  return (
    <button className='button'
            style={{backgroundColor: props.buttonColor}}>
      {children}
    </button>
  );
};

export default Button;