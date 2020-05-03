import React, { useState, useEffect } from 'react';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import getWelcomeData from '../../services/homeService';
import Section from '../Shared/Section/section';

const Home = () => {
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    const welcome = getWelcomeData();
    setWelcome(welcome);
  }, []);

  return (
    <div className="home">
      <div className="home__welcome">
        <Welcome welcome={welcome} />
      </div>
      <div className="home__about-me">
        <Section />
      </div>
    </div>
  );
};

export default Home;
