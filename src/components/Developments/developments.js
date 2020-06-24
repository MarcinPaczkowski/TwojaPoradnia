import React from 'react';
import './developments.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';

const Developments = ({ developments }) => {
  return (
    <div className="developments">
      <h1 className="developments__title">Rozwój i wychowanie</h1>
      <div className="developments__grid">
        <HorizontalTiles tiles={developments} />
      </div>
    </div>
  );
};

export default Developments;
