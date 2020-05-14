import React from 'react';
import './buttonExternalLink.scss';

const ButtonExternalLink = ({ url, children }) => (
  <a
    className="button-external-link"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ButtonExternalLink;
