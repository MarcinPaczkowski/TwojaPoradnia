import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getHomeData } from '../../services/homeService';
import './home.scss';
import Welcome from '../Shared/Welcome/welcome';
import Section from '../Shared/Section/section';

const Home = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const homeData = getHomeData();
    setHomeData(homeData);
  }, []);

  const { welcomeImage, aboutMeImage } = useStaticQuery(
    graphql`
      query {
        welcomeImage: file(relativePath: { eq: "testBgr.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutMeImage: file(relativePath: { eq: "stockPhoto.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  if (homeData?.welcome) {
    homeData.welcome.backgroundImage = welcomeImage.childImageSharp.fluid;
  }

  if (homeData?.aboutMe) {
    homeData.aboutMe.image = aboutMeImage.childImageSharp.fluid;
  }

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
