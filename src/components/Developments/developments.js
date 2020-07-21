import React from 'react';
import './developments.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

const Developments = ({ developments }) => {
  return (
    <div className="developments">
      <div className="developments__title">
        <HeaderTitle title="Rozwój i wychowanie" />
      </div>
      <div className="developments__grid">
        <HorizontalTiles
          tiles={developments.map(d => {
            return {
              title: d.title,
              description: d.shortDescription,
              image: d.image,
              url: d.urlToDetails,
            };
          })}
        />
      </div>
    </div>
  );
};

export default Developments;
