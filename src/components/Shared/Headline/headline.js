import React from 'react';
import './headline.scss';
import GatsbyImage from 'gatsby-image';
import HeadlineDetails from './HeadlineDetails/headlineDetails';

const Headline = ({
  title,
  backgroundImage,
  backgroundColor,
  publishDate,
  author,
}) => {
  return (
    <div className="headline">
      {backgroundImage ? (
        <GatsbyImage
          className="headline__background"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={backgroundImage.fluid}
          alt={backgroundImage.description}
        />
      ) : (
        <div
          className="headline__background"
          style={{ backgroundColor: backgroundColor }}
        />
      )}
      <div className="headline__details">
        <HeadlineDetails
          title={title}
          publishDate={publishDate}
          author={author}
        />
      </div>
    </div>
  );
};

export default Headline;
