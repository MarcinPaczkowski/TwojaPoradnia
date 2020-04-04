import React from 'react';
import './buttonLink.scss';

const ImageLink = ({ url, children }) => {
  // console.log(props);
  return (
    <a className="button-link" href={url}>
      {children}
    </a>
  );
};

export default ImageLink;
