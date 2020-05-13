import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import './section.scss';
import SectionContent from './SectionContent/sectionContent';

const Section = ({ content }) => {
  return (
    <div className="section">
      <Img
        className="section__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={content.image}
        alt={content.imageAlt}
      ></Img>
      <div className="section__content">
        <div className="section__content--wrapper">
          <SectionContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default Section;
