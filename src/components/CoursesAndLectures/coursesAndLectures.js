import React from 'react';
import './coursesAndLectures.scss';
import Section from '../Layout/Section/section';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';
import ImageTile from '../Shared/ImageTile/imageTile';

const CoursesAndLectures = ({ title, subPages }) => {
  const tiles = subPages.map((p) => {
    return {
      link: {
        url: p.action.link,
        text: p.action.buttonText,
      },
      image: {
        src: p.image.fluid,
        alt: p.image.description,
      },
    };
  });
  return (
    <div className="courses-lectures">
      <Section>
        <HeaderTitle title={title} />
      </Section>
      <NegativeMarginWrapper>
        <Section>
          <div className="courses-lectures__items">
            <ImageTile tile={tiles[0]} key={tiles[0].title} />
            <ImageTile tile={tiles[1]} key={tiles[1].title} />
          </div>
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default CoursesAndLectures;
