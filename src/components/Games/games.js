import React from 'react';
import './games.scss';
import Tiles from '../Shared/Tiles/tiles';

const Games = ({ games }) => {
  const tiles = games.map(g => {
    return {
      image: {
        src: g.image.fluid,
        alt: g.image.description,
      },
      title: g.title,
      description: g.shortDescription,
      link: {
        isExternal: false,
        url: g.detailsUrl,
        text: 'Więcej',
      },
    };
  });
  return (
    <div className="games">
      <h1 className="games__title">Gry</h1>
      <div className="games__grid">
        <Tiles tiles={tiles} />
      </div>
    </div>
  );
};

export default Games;
