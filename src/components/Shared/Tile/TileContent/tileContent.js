import React from 'react';
import './tileContent.scss';
import Button from '../../Button/button';
import parse from 'html-react-parser';
import { navigate } from 'gatsby';

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
        {title && <h2>{title}</h2>}
        {description && parse(description)}
      </div>
      <div className="tile-content__link">
        <Button click={() => navigate(url)}>{text}</Button>
      </div>
    </div>
  );
};

export default TileContent;
