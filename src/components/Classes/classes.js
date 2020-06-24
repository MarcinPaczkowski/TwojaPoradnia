import React from 'react';
import './classes.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';

const Classes = ({ classes }) => {
  return (
    <div className="classes">
      <h1 className="classes__title">Zajęcia</h1>
      <div className="classes__grid">
        <HorizontalTiles tiles={classes} />
      </div>
    </div>
  );
};

export default Classes;
