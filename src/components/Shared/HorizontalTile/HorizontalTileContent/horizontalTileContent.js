import React from 'react';
import './horizontalTileContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';
import parse from 'html-react-parser';

const HorizontalTileContent = ({ content: { title, description, url } }) => {
  return (
    <div className="horizontalTileContent">
      {title ? <h2 className="horizontalTileContent__title">{title}</h2> : null}
      {description ? (
        <div className="horizontalTileContent__description">
          {parse(description)}
        </div>
      ) : null}
      {url ? (
        <div className="horizontalTileContent__button">
          <ButtonLink url={url}>Więcej</ButtonLink>
        </div>
      ) : null}
    </div>
  );
};

export default HorizontalTileContent;
