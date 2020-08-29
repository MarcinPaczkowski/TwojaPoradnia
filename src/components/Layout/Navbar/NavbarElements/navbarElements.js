import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './navbarElements.scss';
import ImageLink from '../../../Shared/ImageLink/imageLink';
import NavbarLinks from './NavbarLinks/navbarLinks';
import getRoutingData from '../../../../services/routingService';

const NavbarElements = () => {
  const [leftRoutings, setLeftRoutings] = useState([]);
  const [rightRoutings, setRightRoutings] = useState([]);

  useEffect(() => {
    const routings = getRoutingData();
    setLeftRoutings(routings.filter(r => r.order > 0 && r.isLeft));
    setRightRoutings(routings.filter(r => r.order > 0 && !r.isLeft));
  }, []);

  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "Twoja-Pora-Dnia-logo.png" }) {
          childImageSharp {
            fixed(width: 110, height: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  const imageData = {
    link: '/',
    src: logo.childImageSharp.fixed,
    alt: 'Twoja Pedagogiczna Pora Dnia Logo',
  };

  return (
    <nav
      className="navbar-elements"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="navbar-elements__logo">
        <ImageLink imageData={imageData}></ImageLink>
      </div>
      <div className="navbar-elements__links navbar-elements__links--left">
        <NavbarLinks routings={leftRoutings} isLeft={true}></NavbarLinks>
      </div>
      <div className="navbar-elements__links navbar-elements__links--right">
        <NavbarLinks routings={rightRoutings} isLeft={false}></NavbarLinks>
      </div>
    </nav>
  );
};

export default NavbarElements;
