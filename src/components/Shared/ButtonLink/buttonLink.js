import React from 'react';
import { Link } from 'gatsby';
import './buttonLink.scss';

const ButtonLink = ({ url, children }) => (
  <Link className="button-link" to={url}>
    {children}
  </Link>
);

export default ButtonLink;
