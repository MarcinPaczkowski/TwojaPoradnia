import React from 'react';
import './boxWithCircleImage.scss';

const BoxWithCircleImage = ({ text, image }) => {
  return (
    <div className="box-with-circle-image">
      <div className="box-with-circle-image__wrapper">
        <p className="box-with-circle-image__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse,
          reiciendis facere quaerat quisquam vitae laudantium molestiae,
          dignissimos nulla porro consequatur, sequi odio minus?
        </p>
        <div className="box-with-circle-image__circle"></div>
      </div>
    </div>
  );
};

export default BoxWithCircleImage;
