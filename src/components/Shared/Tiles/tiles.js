import React from 'react';
import './tiles.scss';
import Tile from '../Tile/tile';

const Tiles = ({ tiles }) => {
  return (
    <div className="tiles">
      {tiles.map((t, i) => (
        <Tile tile={t} key={`${t.title}-${i}`} />
      ))}
    </div>
  );
};

export default Tiles;
