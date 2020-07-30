import React from 'react';
import './horizontalTiles.scss';
import HorizontalTile from '../HorizontalTile/horizontalTile';
import tileImagePosition from '../HorizontalTile/tileImagePosition';
import { v4 as uuid } from 'uuid';
import Section from '../../Layout/Section/section';

const HorizontalTiles = ({ tiles }) => {
  return (
    <div className="horizontalTiles">
      {tiles.map((t, i) => {
        const isEven = i % 2 === 0;
        return (
          <Section hasColor={isEven} key={uuid()}>
            <HorizontalTile
              imagePosition={
                isEven ? tileImagePosition.LEFT : tileImagePosition.RIGHT
              }
              content={t}
            />
          </Section>
        );
      })}
    </div>
  );
};

export default HorizontalTiles;
