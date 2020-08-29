import React from 'react';
import './button.scss';

const Button = ({ click, children }) => (
  <button className="button" onClick={click}>
    {children}
  </button>
);

export default Button;
