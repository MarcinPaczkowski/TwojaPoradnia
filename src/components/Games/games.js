import React from 'react';
import './games.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const Games = ({ title, games }) => {
  const tiles = games.map((g) => {
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
      <Section>
        <HeaderTitle title={title} />
      </Section>
      <NegativeMarginWrapper>
        <Section>
          <Tiles tiles={tiles} />
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default Games;
