import React from 'react';
import './section.scss';
import SectionContent from './SectionContent/sectionContent';

const Section = ({ content }) => {
  return (
    <div className="section">
      <img
        className="section__image"
        src={content.imageLink}
        alt={content.imageAlt}
      ></img>
      <div className="section__content">
        <div className="section__content--wrapper">
          <SectionContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default Section;
