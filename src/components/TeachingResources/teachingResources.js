import React from 'react';
import './teachingResources.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

const TeachingResources = ({ resources }) => {
  const tiles = resources.map(r => {
    return {
      image: {
        src: r.image.fluid,
        alt: r.image.description,
      },
      title: r.title,
      description: r.description,
      link: {
        url: r.resource,
        text: 'Pobierz',
      },
    };
  });
  return (
    <div className="teaching-resources">
      <div className="teaching-resources__title">
        <HeaderTitle title="Materiały" />
      </div>
      <div className="teaching-resources__grid">
        <Tiles tiles={tiles} />
      </div>
    </div>
  );
};

export default TeachingResources;
