import React from 'react';
import './teachingResources.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

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
      <Section>
        <HeaderTitle title="Materiały" />
      </Section>
      <NegativeMarginWrapper>
        <Section>
          <Tiles tiles={tiles} />
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default TeachingResources;
