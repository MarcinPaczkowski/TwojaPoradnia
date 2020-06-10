import React from 'react';
import './classes.scss';
import HorizontalTile from '../Shared/HorizontalTile/horizontalTile';
import { v4 as uuid } from 'uuid';

const Classes = ({ classes }) => {
  return (
    <div className="classes">
      <h1 className="classes__title">Zajęcia</h1>
      <div className="classes__grid">
        {classes.map((c, i) => (
          <HorizontalTile isOdd={i % 2 !== 0} content={c} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
