import React from 'react';
import GatsbyImage from 'gatsby-image';
import './tile.scss';
import TileContent from './TileContent/tileContent';
import { FaArrowCircleRight, FaCloudDownloadAlt } from 'react-icons/fa';
import 'animate.css/animate.css';

const Tile = ({ tile }) => {
  const isDownload = tile.link.url
    .split('/')
    .pop()
    .includes('.');

  return (
    <a href={tile.link.url} className="tile">
      <GatsbyImage
        className="tile__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={tile.image.src}
        alt={tile.image.alt}
      />
      <div
        className={`tile__image-overlay animate__animated ${
          isDownload ? 'animate__bounce' : 'animate__wobble'
        }`}
      >
        {isDownload ? <FaCloudDownloadAlt /> : <FaArrowCircleRight />}
      </div>
      <div className="tile__content">
        <TileContent tile={tile} />
      </div>
    </a>
  );
};

export default Tile;
