import React from 'react';
import './classes.scss';
import HorizontalTile from '../Shared/HorizontalTile/horizontalTile';

const Classes = () => {
  return (
    <div className="classes">
      <h1 className="classes__title">Zajęcia</h1>
      <div className="classes__grid">
        <HorizontalTile isOdd={false} />
        <HorizontalTile isOdd={true} />
        <HorizontalTile isOdd={false} />
        <HorizontalTile isOdd={true} />
      </div>
    </div>
  );
};

export default Classes;
