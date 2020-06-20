import React from 'react';
import './aboutMeContent.scss';
import Article from '../../Shared/Article/article';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import { v4 as uuid } from 'uuid';

const AboutMeContent = ({ content }) => {
  return content.map((c, i) =>
    i % 2 ? (
      <div key={uuid()} className="about-me-content about-me-content__odd">
        <GatsbyImage
          className="about-me-content__odd--image"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={c.image.fluid}
          alt={c.image.description}
        ></GatsbyImage>
        <div className="about-me-content__odd--article">
          <Article content={c}></Article>
        </div>
      </div>
    ) : (
      <div key={uuid()} className="about-me-content about-me-content__even">
        <div className="about-me-content__even--background"></div>
        <GatsbyImage
          className="about-me-content__even--image"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={c.image.fluid}
          alt={c.image.description}
        ></GatsbyImage>
        <div className="about-me-content__even--article">
          <Article content={c}></Article>
        </div>
      </div>
    )
  );
};

export default AboutMeContent;
