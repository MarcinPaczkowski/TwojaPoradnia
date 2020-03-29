import React, { useState, useEffect } from 'react';
import './mobileMenu.scss';
import MobileMenuLink from './MobileMenuLink/mobileMenuLink';
import MobileMenuSocialMedia from './MobileMenuSocialMedia/mobileMenuSocialMedia';
import MobileMenuContact from './MobileMenuContact/mobileMenuContact';
import ImageWithLink from '../../../Shared/ImageWithLink/imageWithLink';
import { getRoutingData } from '../../../../services/routingService';
import { getSocialMedias } from '../../../../services/socialMediaService';
import { getContactData } from '../../../../services/contactService';
import logo from '../../../../images/logo1.png';

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

  if (!isActive) {
    return null;
  }

  const imageData = { link: '/', src: logo, alt: 'Twoja Poradnia Logo' };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__logo">
        <ImageWithLink imageData={imageData}></ImageWithLink>
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
