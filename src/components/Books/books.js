import React from 'react';
import './books.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

const Books = ({ books }) => {
  const tiles = books.map(b => {
    return {
      image: {
        src: b.image.fluid,
        alt: b.image.description,
      },
      title: b.title,
      description: b.shortDescription,
      link: {
        url: b.detailsUrl,
        text: 'Więcej',
      },
    };
  });
  return (
    <div className="books">
      <div className="books__title">
        <HeaderTitle title="Książki" />
      </div>
      <div className="books__grid">
        <Tiles tiles={tiles} />
      </div>
    </div>
  );
};

export default Books;
