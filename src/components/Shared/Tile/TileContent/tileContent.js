import React from 'react';
import './tileContent.scss';
import ButtonExternalLink from '../../ButtonExternalLink/buttonExternalLink';

const TileContent = ({
  tile: {
    title,
    description,
    link: { url, text },
  },
}) => {
  return (
    <div className="tile-content">
      <div className="tile-content__wrapper">
        <h2 className="tile-content__wrapper--title">{title}</h2>
        <p className="tile-content__wrapper--description">{description}</p>
      </div>
      <div className="tile-content__link">
        <ButtonExternalLink url={url}>{text}</ButtonExternalLink>
      </div>
    </div>
  );
};

export default TileContent;
