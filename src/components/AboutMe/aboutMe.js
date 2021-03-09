import React from 'react';
import './aboutMe.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const AboutMe = ({ title, articles }) => {
  return (
    <div className="about-me">
      <Section>
        <HeaderTitle title={title} />
      </Section>
      <NegativeMarginWrapper>
        <Section isWide>
          <HorizontalTiles
            tiles={articles.map((a) => {
              return {
                title: a.title,
                description: a.shortDescription,
                image: a.image,
              };
            })}
          />
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default AboutMe;
