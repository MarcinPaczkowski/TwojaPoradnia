import React from 'react';
import './games.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

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
        url: g.detailsUrl,
        text: 'Więcej',
      },
    };
  });
  return (
    <div className="games">
      <div className="games__title">
        <HeaderTitle title="Gry" />
      </div>
      <div className="games__grid">
        <Tiles tiles={tiles} />
      </div>
    </div>
  );
};

export default Games;
