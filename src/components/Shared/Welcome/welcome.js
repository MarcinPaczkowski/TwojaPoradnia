import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import GatsbyImage from 'gatsby-image/withIEPolyfill';
import './welcome.scss';
import parse from 'html-react-parser';

const Welcome = ({ welcome: { title, description, image } }) => {
  useEffect(() => {
    function handleResize() {
      window.document.getElementsByClassName(
        'parallax-inner'
      )[0].style.transform = 'translate3d(0%, 0%, 0px)';
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="welcome">
      <Parallax className="welcome__background" y={[-50, 50]} tagOuter="figure">
        <GatsbyImage
          className="welcome__background--image"
          objectFit="cover"
          objectPosition="15% 30%"
          fluid={image.fluid}
          alt={image.description}
        ></GatsbyImage>
      </Parallax>
      <div className="welcome__content-background"></div>
      <div className="welcome__content">
        <div className="welcome-content__title welcome-content__text">
          {parse(title)}
        </div>
        <div className="welcome-content__desc welcome-content__text">
          {parse(description)}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
