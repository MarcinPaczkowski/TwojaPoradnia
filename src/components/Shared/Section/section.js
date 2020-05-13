import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import './section.scss';
import SectionContent from './SectionContent/sectionContent';

const Section = ({ content, isImageOnLeft }) => {
  const sectionClasses = isImageOnLeft
    ? 'section'
    : 'section section--reversed';
  const imageClasses = isImageOnLeft
    ? 'section__image'
    : 'section__image section__image--reversed';
  const contentClasses = isImageOnLeft
    ? 'section__content'
    : 'section__content section__content--reversed';

  return (
    <div className={sectionClasses}>
      <Img
        className={imageClasses}
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={content.image}
        alt={content.imageAlt}
      ></Img>
      <div className={contentClasses}>
        <div className="section__content--wrapper">
          <SectionContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default Section;
