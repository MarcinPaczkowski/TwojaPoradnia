import React from 'react';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './boxCard.scss';
import BoxCardContent from './BoxCardContent/boxCardContent';

const BoxCard = ({ content, isImageOnLeft }) => {
  const boxCardClasses = isImageOnLeft
    ? 'box-card'
    : 'box-card box-card--reversed';
  const imageClasses = isImageOnLeft
    ? 'box-card__image'
    : 'box-card__image box-card__image--reversed';
  const contentClasses = isImageOnLeft
    ? 'box-card__content'
    : 'box-card__content box-card__content--reversed';

  return (
    <div className={boxCardClasses}>
      <GatsbyImage
        className={imageClasses}
        objectFit="cover"
        objectPosition="50% 50%"
        fluid={content.image.fluid}
        alt={content.image.description}
      ></GatsbyImage>
      <div className={contentClasses}>
        <div className="box-card__content--wrapper">
          <BoxCardContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
