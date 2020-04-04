import React from 'react';
import { Link } from 'gatsby';
import './imageLink.scss';

const ImageLink = ({ imageData: { link, src, alt } }) => (
  <Link className="image-link" to={link}>
    <img className="image-link__img" src={src} alt={alt} />
  </Link>
);

export default ImageLink;
