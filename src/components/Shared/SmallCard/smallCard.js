import React from 'react';
import './smallCard.scss';

const SmallCard = ({ text, icon }) => {
  return (
    <div className="small-card">
      <div className="small-card__icon"></div>
      <p className="small-card__text">{text}</p>
    </div>
  );
};

export default SmallCard;
