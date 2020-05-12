import React, { useState, useEffect } from 'react';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import getHomeData from '../../services/homeService';
import Section from '../Shared/Section/section';

const Home = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const homeData = getHomeData();
    setHomeData(homeData);
  }, []);

  const welcome = homeData?.welcome ? (
    <Welcome welcome={homeData.welcome} />
  ) : null;

  const aboutMe = homeData?.aboutMe ? (
    <Section content={homeData.aboutMe} />
  ) : null;

  return (
    <div className="home">
      <div className="home__welcome">{welcome}</div>
      <div className="home__about-me">{aboutMe}</div>
    </div>
  );
};

export default Home;
