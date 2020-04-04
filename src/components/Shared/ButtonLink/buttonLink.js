import React from 'react';
import { Link } from 'gatsby';
import './buttonLink.scss';

const ImageLink = ({ url, children }) => (
  <Link className="button-link" to={url}>
    {children}
  </Link>
);

export default ImageLink;
