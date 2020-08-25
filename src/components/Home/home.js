import React, { Fragment } from 'react';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import BoxCard from '../Shared/BoxCard/boxCard';
import Section from '../Layout/Section/section';
import Quotation from '../Shared/Quotation/quotation';

const Home = ({ homePage }) => {
  return (
    <div className="home">
      <div className="home__welcome">
        <Welcome welcome={homePage.welcome} />
      </div>
      <div className="home__articles">
        {homePage.articles.map((a, i) => {
          return (
            <Fragment key={`${a.title}-${i}`}>
              <Section>
                <BoxCard content={a} isImageOnLeft={i % 2 !== 0} />
              </Section>
              {a.quotation && (
                <Section hasColor>
                  <div className="home__quotation">
                    <Quotation>{a.quotation}</Quotation>
                  </div>
                </Section>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
