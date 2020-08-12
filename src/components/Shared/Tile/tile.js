import React, { useRef } from 'react';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './tile.scss';
import TileContent from './TileContent/tileContent';
import { FaArrowCircleRight, FaCloudDownloadAlt } from 'react-icons/fa';
import 'animate.css/animate.css';

const Tile = ({ tile }) => {
  const tileContentRef = useRef();
  tile.link.isInternal = /^\/(?!\/)/.test(tile.link.url);
  const isDownload = tile.link.url
    .split('/')
    .pop()
    .includes('.');

  return (
    <div className="tile" onClick={() => tileContentRef.current.navigate()}>
      <GatsbyImage
        className="tile__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={tile.image.src}
        alt={tile.image.alt}
      ></GatsbyImage>
      <div
        className={`tile__image-overlay animate__animated ${
          isDownload ? 'animate__bounce' : 'animate__wobble'
        }`}
      >
        {isDownload ? <FaCloudDownloadAlt /> : <FaArrowCircleRight />}
      </div>
      <div className="tile__content">
        <TileContent ref={tileContentRef} tile={tile} />
      </div>
    </div>
  );
};

export default Tile;
