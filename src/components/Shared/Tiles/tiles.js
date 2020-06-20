import React from 'react';
import './tiles.scss';
import Tile from '../Tile/tile';
import { v4 as uuid } from 'uuid';

const Tiles = ({ tiles }) => {
  return (
    <div className="tiles">
      {tiles.map(t => (
        <Tile tile={t} key={uuid()} />
      ))}
    </div>
  );
};

export default Tiles;
