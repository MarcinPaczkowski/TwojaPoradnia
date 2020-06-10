import React from 'react';
import './tileContent.scss';
import ButtonExternalLink from '../../ButtonExternalLink/buttonExternalLink';
import parse from 'html-react-parser';

const TileContent = ({
  tile: {
    title,
    description,
    link: { url, text },
  },
}) => {
  console.log(url);
  return (
    <div className="tile-content">
      <div className="tile-content__wrapper">
        <h2 className="tile-content__wrapper--title">{title}</h2>
        {parse(description)}
      </div>
      <div className="tile-content__link">
        <ButtonExternalLink url={url}>{text}</ButtonExternalLink>
      </div>
    </div>
  );
};

export default TileContent;
