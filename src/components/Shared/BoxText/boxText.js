import React from 'react';
import './boxText.scss';

const BoxText = ({ text }) => {
  return (
    <div className="box-text">
      <p className="box-text__text">{text}</p>
    </div>
  );
};

export default BoxText;
