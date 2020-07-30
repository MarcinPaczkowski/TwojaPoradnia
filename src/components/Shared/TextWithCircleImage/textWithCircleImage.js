import React from 'react';
import './textWithCircleImage.scss';

const TextWithCircleImage = ({ text, icon }) => {
  return (
    <div className="text-with-circle-image">
      <div className="text-with-circle-image__icon"></div>
      <p className="text-with-circle-image__text">{text}</p>
    </div>
  );
};

export default TextWithCircleImage;
