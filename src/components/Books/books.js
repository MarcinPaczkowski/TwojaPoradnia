import React from 'react';
import './books.scss';
import Tiles from '../Shared/Tiles/tiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const Books = ({ title, books }) => {
  const tiles = books.map((b) => {
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

export default Books;
