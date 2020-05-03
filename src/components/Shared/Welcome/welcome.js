import React from 'react';
import './welcome.scss';
import backgroundImage from '../../../images/testBgr.jpg';

const Welcome = ({ welcome }) => {
  return (
    <div className="welcome">
      <img
        className="welcome__background"
        src={welcome.backgroundImageLink}
      ></img>
      <div className="welcome__content">
        <h1 className="welcome__content--title">{welcome.title}</h1>
        <p className="welcome__content--desc">{welcome.description}</p>
      </div>
    </div>
  );
};

export default Welcome;
