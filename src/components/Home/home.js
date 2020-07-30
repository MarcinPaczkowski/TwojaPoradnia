import React from 'react';
import { v4 as uuid } from 'uuid';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import BoxCard from '../Shared/BoxCard/boxCard';
import Section from '../Layout/Section/section';

const Home = ({ homePage }) => {
  return (
    <div className="home">
      <div className="home__welcome">
        <Welcome welcome={homePage.welcome} />
      </div>
      <div className="home__articles">
        {homePage.articles.map((a, i) => {
          return (
            <Section key={uuid()}>
              <BoxCard content={a} isImageOnLeft={i % 2 !== 0} />
            </Section>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
