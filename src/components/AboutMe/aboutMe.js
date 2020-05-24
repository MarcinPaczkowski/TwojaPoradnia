import React, { useState, useEffect } from 'react';
import './aboutMe.scss';
import { getAboutMeContent } from '../../services/aboutMeService';
import AboutMeContent from './AboutMeContent/aboutMeContent';

const AboutMe = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const content = getAboutMeContent();
    setContent(content);
  }, []);

  return (
    <div className="about-me">
      <div className="about-me__content">
        <AboutMeContent content={content}></AboutMeContent>
      </div>
    </div>
  );
};

export default AboutMe;
