import React from 'react';
import './textWithCircleImage.scss';
import parse from 'html-react-parser';
import GatsbyImage from 'gatsby-image';

const TextWithCircleImage = ({ text, image, isHtml }) => {
  return (
    <div className="text-with-circle-image">
      <GatsbyImage
        className="text-with-circle-image__image"
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={image.fluid}
        alt={image.description}
      />
      <div className="text-with-circle-image__text">
        {isHtml ? parse(text) : `<p>${text}</p>`}
      </div>
    </div>
  );
};

export default TextWithCircleImage;
