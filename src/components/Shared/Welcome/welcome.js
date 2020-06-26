import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './welcome.scss';
import parse from 'html-react-parser';

const Welcome = ({ welcome: { title, description, image } }) => {
  return (
    <div className="welcome">
      <Parallax className="welcome__background" y={[-50, 50]} tagOuter="figure">
        <GatsbyImage
          className="welcome__background--image"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={image.fluid}
          alt={image.description}
        ></GatsbyImage>
      </Parallax>
      <div className="welcome__content">
        <div className="welcome__content--title welcome__content--text">
          {parse(title)}
        </div>
        <div className="welcome__content--desc  welcome__content--text">
          {parse(description)}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
