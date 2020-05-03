import React from 'react';
import image from '../../../images/stockPhoto.jpg';
import './section.scss';
import SectionContent from './SectionContent/sectionContent';

const Section = () => {
  return (
    <div className="section">
      <img className="section__image" src={image}></img>
      <div className="section__content">
        <div className="section__content--wrapper">
          <SectionContent />
        </div>
      </div>
    </div>
  );
};

export default Section;
