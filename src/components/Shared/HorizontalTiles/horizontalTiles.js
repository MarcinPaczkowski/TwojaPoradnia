import React from 'react';
import './horizontalTiles.scss';
import HorizontalTile from '../HorizontalTile/horizontalTile';
import { v4 as uuid } from 'uuid';

const HorizontalTiles = ({ tiles }) => {
  return (
    <div className="horizontalTiles">
      <div className="horizontalTiles__tile">
        {tiles.map((t, i) => (
          <HorizontalTile isOdd={i % 2 !== 0} content={t} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalTiles;
