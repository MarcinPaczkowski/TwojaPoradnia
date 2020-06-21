import React from 'react';
import './tileContent.scss';
import ButtonExternalLink from '../../ButtonExternalLink/buttonExternalLink';
import ButtonLink from '../../ButtonLink/buttonLink';
import parse from 'html-react-parser';

const TileContent = ({
  tile: {
    title,
    description,
    link: { url, text },
  },
}) => {
  const isInternal = /^\/(?!\/)/.test(url);
  return (
    <div className="tile-content">
      <div className="tile-content__wrapper">
        <h2 className="tile-content__wrapper--title">{title}</h2>
        {parse(description)}
      </div>
      <div className="tile-content__link">
        {isInternal ? (
          <ButtonLink url={url}>{text}</ButtonLink>
        ) : (
          <ButtonExternalLink url={url}>{text}</ButtonExternalLink>
        )}
      </div>
    </div>
  );
};

export default TileContent;
