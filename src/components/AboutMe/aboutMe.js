import React from 'react';
import './aboutMe.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';

const AboutMe = ({ articles }) => {
  return (
    <div className="about-me">
      <div className="about-me__title">
        <HeaderTitle title="O mnie" />
      </div>
      <div className="about-me__content">
        <HorizontalTiles
          tiles={articles.map(a => {
            return {
              title: a.title,
              description: a.shortDescription,
              image: a.image,
            };
          })}
        />
      </div>
    </div>
  );
};

export default AboutMe;
