import React from 'react';
import './imageLink.scss';

const ImageLink = ({ imageData: { link, src, alt } }) => (
  <a className="image-link" href={link}>
    <img className="image-link__img" src={src} alt={alt} />
  </a>
);

export default ImageLink;
