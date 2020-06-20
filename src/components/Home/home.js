import React from 'react';
import { v4 as uuid } from 'uuid';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import Section from '../Shared/Section/section';

const Home = ({ homePage }) => {
  return (
    <div className="home">
      <div className="home__welcome">
        <Welcome welcome={homePage.welcome} />
      </div>
      <div className="home__articles">
        {homePage.articles.map((a, i) => {
          return (
            <Section content={a} isImageOnLeft={i % 2 !== 0} key={uuid()} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
