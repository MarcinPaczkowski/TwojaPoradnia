import React from 'react';
import './horizontalTile.scss';
import HorizontalTileContent from './HorizontalTileContent/horizontalTileContent';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const HorizontalTile = ({ isOdd, content }) => {
  return (
    <div className={`horizontalTile ${isOdd ? 'horizontalTile--odd' : ''}`}>
      <GatsbyImage
        className={`horizontalTile__image ${
          isOdd ? 'horizontalTile__image--odd' : ''
        }`}
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={content.image.fluid}
        alt={content.image.description}
      ></GatsbyImage>
      <div
        className={`horizontalTile__content ${
          isOdd ? 'horizontalTile__content--odd' : ''
        }`}
      >
        <HorizontalTileContent content={content} />
      </div>
    </div>
  );
};

export default HorizontalTile;
