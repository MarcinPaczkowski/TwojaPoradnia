import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './mobileMenu.scss';
import MobileMenuLink from './MobileMenuLink/mobileMenuLink';
import MobileMenuSocialMedia from './MobileMenuSocialMedia/mobileMenuSocialMedia';
import MobileMenuContact from './MobileMenuContact/mobileMenuContact';
import ImageLink from '../../../../Shared/ImageLink/imageLink';
import getRoutingData from '../../../../../services/routingService';
import getSocialMedias from '../../../../../services/socialMediaService';
import getContactData from '../../../../../services/contactService';

const MobileMenu = ({ isActive }) => {
  const [routings, setRoutings] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    const routings = getRoutingData();
    setRoutings(routings);

    const socialMedias = getSocialMedias();
    setSocialMedias(socialMedias);

    const contact = getContactData();
    setContact(contact);
  }, []);

  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 100, height: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  if (!isActive) {
    return null;
  }

  const imageData = {
    link: '/',
    src: logo.childImageSharp.fixed,
    alt: 'Twoja Poradnia Logo',
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__logo">
        <ImageLink imageData={imageData}></ImageLink>
      </div>
      <div className="mobile-menu__links">
        {routings.map((r, i) => (
          <MobileMenuLink key={`${r.name}${i}`} routing={r}></MobileMenuLink>
        ))}
      </div>
      <div className="mobile-menu__social-media">
        {socialMedias.map((sm, i) => (
          <MobileMenuSocialMedia
            key={`${sm.name}${i}`}
            socialMedia={sm}
          ></MobileMenuSocialMedia>
        ))}
      </div>
      <div className="mobile-menu__contact">
        <MobileMenuContact contact={contact}></MobileMenuContact>
      </div>
    </div>
  );
};

export default MobileMenu;
