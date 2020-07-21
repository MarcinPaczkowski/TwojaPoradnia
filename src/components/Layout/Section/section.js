import React from 'react';
import './section.scss';

const Section = ({ children, hasColor, isWide }) => {
  return (
    <div className={`section ${hasColor ? 'section--background' : ''}`}>
      <div className="section__wrapper">
        <div
          className={`section__container ${
            isWide ? 'section__container--wide' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
