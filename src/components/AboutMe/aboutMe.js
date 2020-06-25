import React from 'react';
import './aboutMe.scss';
// import AboutMeContent from './AboutMeContent/aboutMeContent';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';

const AboutMe = ({ articles }) => {
  return (
    <div className="about-me">
      <h1 className="about-me__title">O mnie</h1>
      <div className="about-me__content">
        <HorizontalTiles tiles={articles} />
      </div>
    </div>
  );
};

export default AboutMe;
