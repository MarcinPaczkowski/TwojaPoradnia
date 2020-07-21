import React from 'react';
import './classes.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

const Classes = ({ classes }) => {
  return (
    <div className="classes">
      <div className="classes__title">
        <HeaderTitle title="Zajęcia" />
      </div>
      <div className="classes__grid">
        <HorizontalTiles
          tiles={classes.map(c => {
            return {
              title: c.title,
              description: c.shortDescription,
              image: c.image,
              url: c.urlToDetails,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Classes;
