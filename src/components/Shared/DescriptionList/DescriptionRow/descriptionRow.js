import React from 'react';
import GatsbyImage from 'gatsby-image';
import './descriptionRow.scss';
import parse from 'html-react-parser';

const DescriptionRow = ({ element: { text, image } }, isHtml) => {
  return (
    <li className="description-row">
      <GatsbyImage
        className="description-row__icon"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={image.fluid}
        alt={image.description}
      />
      <div className="description-row__text">
        {isHtml ? parse(text) : `<p>${text}</p>`}
      </div>
    </li>
  );
};

export default DescriptionRow;
