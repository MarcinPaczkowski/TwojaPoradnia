import React from 'react';
import './imageWithLink.scss';

const ImageWithLink = ({ imageData: { link, src, alt } }) => (
  <a className="image-with-link" href={link}>
    <img className="image-with-link__img" src={src} alt={alt} />
  </a>
);

export default ImageWithLink;
