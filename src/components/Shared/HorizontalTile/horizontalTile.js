import React from 'react';
import './horizontalTile.scss';
import HorizontalTileContent from './HorizontalTileContent/horizontalTileContent';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import tileImagePosition from './tileImagePosition';

const HorizontalTile = ({ imagePosition, content, objectFit }) => {
  return content ? (
    <div className="horizontalTile">
      {content.image ? (
        <GatsbyImage
          className={`horizontalTile__image ${
            imagePosition === tileImagePosition.LEFT
              ? 'horizontalTile__image--left'
              : 'horizontalTile__image--right'
          }`}
          objectFit={objectFit ?? 'cover'}
          objectPosition="50% 50%"
          fluid={content.image.fluid}
          alt={content.image.description}
        />
      ) : (
        <div
          className={`horizontalTile__image ${
            imagePosition === tileImagePosition.LEFT
              ? 'horizontalTile__image--left'
              : 'horizontalTile__image--right'
          }`}
        />
      )}
      <div
        className={`horizontalTile__content ${
          imagePosition !== tileImagePosition.LEFT
            ? 'horizontalTile__content--left'
            : 'horizontalTile__content--right'
        }`}
      >
        <HorizontalTileContent content={content} />
      </div>
    </div>
  ) : null;
};

export default HorizontalTile;
