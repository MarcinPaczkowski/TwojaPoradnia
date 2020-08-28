import React from 'react';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';
import './imageTile.scss';
import Button from '../Button/button';

const ImageTile = ({ tile: { link, image } }) => {
  return (
    <Link className="image-tile" to={link.url}>
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
    </Link>
  );
};

export default ImageTile;
