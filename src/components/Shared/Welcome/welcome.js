import React from 'react';
import './welcome.scss';

const Welcome = ({
  welcome: { backgroundImageLink, backgroundImageAlt, title, description },
}) => {
  return (
    <div className="welcome">
      <img
        className="welcome__background"
        src={backgroundImageLink}
        alt={backgroundImageAlt}
      ></img>
      <div className="welcome__content">
        <h1 className="welcome__content--title">{title}</h1>
        <p className="welcome__content--desc">{description}</p>
      </div>
    </div>
  );
};

export default Welcome;
