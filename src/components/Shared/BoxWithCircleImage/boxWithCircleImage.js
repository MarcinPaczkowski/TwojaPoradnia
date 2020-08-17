import React from 'react';
import GatsbyImage from 'gatsby-image';
import './boxWithCircleImage.scss';
import parse from 'html-react-parser';

const BoxWithCircleImage = ({ text, image }) => {
  return (
    <div className="box-with-circle-image">
      <div className="box-with-circle-image__wrapper">
        {parse(text)}
        <div className="box-with-circle-image__circle">
          {image ? (
            <GatsbyImage
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={image.fluid}
              alt={image.description}
            />
          ) : (
            <div className="gatsby-image-wrapper" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoxWithCircleImage;
