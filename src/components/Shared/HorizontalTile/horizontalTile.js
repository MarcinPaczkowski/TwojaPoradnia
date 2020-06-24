import React from 'react';
import './horizontalTile.scss';
import HorizontalTileContent from './HorizontalTileContent/horizontalTileContent';
import GatsbyImage from 'gatsby-image/withIEPolyfill';

const HorizontalTile = ({ isOdd, content }) => {
  const horizontalTileClasses = `horizontalTile ${
    !isOdd ? 'horizontalTile__odd' : ''
  }`;
  return (
    <div className={horizontalTileClasses}>
      <GatsbyImage
        className="horizontalTile__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={content.image.fluid}
        alt={content.image.description}
      ></GatsbyImage>
      <div className="horizontalTile__content">
        <HorizontalTileContent content={content} />
      </div>
    </div>
  );
};

export default HorizontalTile;
