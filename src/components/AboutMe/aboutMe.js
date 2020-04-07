import React, { useState, useEffect } from 'react';
import './aboutMe.scss';
import { getAboutMeContent } from './aboutMeService';
import AboutMeContent from './AboutMeContent/aboutMeContent';

const AboutMe = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const content = getAboutMeContent();
    setContent(content);
  }, []);

  return (
    <section className="about-me">
      <div className="about-me__content">
        <AboutMeContent content={content}></AboutMeContent>
      </div>
    </section>
  );
};

export default AboutMe;
