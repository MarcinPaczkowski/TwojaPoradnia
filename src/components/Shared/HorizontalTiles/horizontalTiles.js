import React from 'react';
import './horizontalTiles.scss';
import HorizontalTile from '../HorizontalTile/horizontalTile';
import tileImagePosition from '../HorizontalTile/tileImagePosition';
import { v4 as uuid } from 'uuid';

const HorizontalTiles = ({ tiles }) => {
  return (
    <div className="horizontalTiles">
      {tiles.map((t, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            className={`horizontalTiles__tile ${
              isEven ? 'horizontalTiles__tile--background' : ''
            }`}
            key={uuid()}
          >
            <HorizontalTile
              imagePosition={
                isEven ? tileImagePosition.LEFT : tileImagePosition.RIGHT
              }
              content={t}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalTiles;
