import React from 'react';
import './horizontalTile.scss';
import HorizontalTileContent from './HorizontalTileContent/horizontalTileContent';

const HorizontalTile = ({ isOdd }) => {
  const horizontalTileClasses = `horizontalTile ${
    !isOdd ? 'horizontalTile__odd' : ''
  }`;
  return (
    <div className={horizontalTileClasses}>
      <div className="horizontalTile__background"></div>
      <div className="horizontalTile__content">
        <HorizontalTileContent />
      </div>
    </div>
  );
};

export default HorizontalTile;
