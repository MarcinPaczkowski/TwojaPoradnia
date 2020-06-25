import React from 'react';
import './horizontalTileContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';
import parse from 'html-react-parser';

const HorizontalTileContent = ({
  content: { title, shortDescription, urlToDetails },
}) => {
  return (
    <div className="horizontalTileContent">
      <h2 className="horizontalTileContent__title">{title}</h2>
      <div className="horizontalTileContent__description">
        {parse(shortDescription)}
      </div>
      {urlToDetails ? (
        <div className="horizontalTileContent__button">
          <ButtonLink url={urlToDetails}>Więcej</ButtonLink>
        </div>
      ) : null}
    </div>
  );
};

export default HorizontalTileContent;
