import React from 'react';
import './aboutMe.scss';
import AboutMeContent from './AboutMeContent/aboutMeContent';

const AboutMe = ({ articles }) => {
  return (
    <div className="about-me">
      <div className="about-me__content">
        <AboutMeContent content={articles}></AboutMeContent>
      </div>
    </div>
  );
};

export default AboutMe;
