import React from 'react';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './tile.scss';
import TileContent from './TileContent/tileContent';

const Tile = ({ tile }) => {
  return (
    <div className="tile">
      <GatsbyImage
        className="tile__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={tile.image.src}
        alt={tile.image.alt}
      ></GatsbyImage>
      <div className="tile__content">
        <TileContent tile={tile} />
      </div>
    </div>
  );
};

export default Tile;
