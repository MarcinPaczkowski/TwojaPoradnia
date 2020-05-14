import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import './tile.scss';
import TileContent from './TileContent/tileContent';

const Tile = ({ tile }) => {
  return (
    <div className="tile">
      <Img
        className="tile__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={tile.image.src}
        alt={tile.image.alt}
      ></Img>
      <TileContent tile={tile} />
    </div>
  );
};

export default Tile;
