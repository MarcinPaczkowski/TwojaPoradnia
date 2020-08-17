import React from 'react';
import GatsbyImage from 'gatsby-image';
import './smallCard.scss';
import parse from 'html-react-parser';

const SmallCard = ({ text, icon, isHtml }) => {
  return (
    <div className="small-card">
      {icon ? (
        <GatsbyImage
          className="small-card__icon"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={icon.fluid}
          alt={icon.description}
        />
      ) : (
        <div className="small-card__icon" />
      )}
      <div className="small-card__text">
        {isHtml ? parse(text) : `<p>${text}</p>`}
      </div>
    </div>
  );
};

export default SmallCard;
