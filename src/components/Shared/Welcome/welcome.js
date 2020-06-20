import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './welcome.scss';

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
        <h1 className="welcome__content--title">{title}</h1>
        <p className="welcome__content--desc">{description}</p>
      </div>
    </div>
  );
};

export default Welcome;
