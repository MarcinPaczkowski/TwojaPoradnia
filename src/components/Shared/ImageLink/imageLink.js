import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import './imageLink.scss';

const ImageLink = ({ imageData: { link, src, alt } }) => (
  <Link className="image-link" to={link}>
    <Img className="image-link__img" fixed={src} alt={alt}></Img>
  </Link>
);

export default ImageLink;
