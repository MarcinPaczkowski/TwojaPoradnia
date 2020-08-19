import React from 'react';
import GatsbyImage from 'gatsby-image';
import './imageTile.scss';
import Button from '../Button/button';

const ImageTile = ({ tile: { link, image } }) => {
  return (
    <a href={link.url} className="image-tile">
      <GatsbyImage
        className="image-tile__background"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={image.src}
        alt={image.alt}
      />
      <div className="image-tile__link">
        <Button>{link.text}</Button>
      </div>
    </a>
  );
};

export default ImageTile;
