import React from 'react';
import './horizontalTiles.scss';
import HorizontalTile from '../HorizontalTile/horizontalTile';
import tileImagePosition from '../HorizontalTile/tileImagePosition';
import Section from '../../Layout/Section/section';

const HorizontalTiles = ({ tiles }) => {
  return (
    <div className="horizontalTiles">
      {tiles.map((t, i) => {
        const isEven = i % 2 === 0;
        return (
          <Section hasColor={isEven} key={`${t.title}-${i}`}>
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
