import React, { useState, useEffect } from 'react';
import './mobileMenu.scss';
import MobileMenuLink from './MobileMenuLink/mobileMenuLink';
import MobileMenuSocialMedia from './MobileMenuSocialMedia/mobileMenuSocialMedia';
import MobileMenuContact from './MobileMenuContact/mobileMenuContact';

const MobileMenu = ({ isActive }) => {
  const [routings, setRoutings] = useState([]);
  const [socialMedias, setSocialMedias] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    const routings = [
      { name: 'Zajęcia', link: 'www.google.pl' },
      { name: 'Blog', link: 'www.google.pl' },
      { name: 'O nas', link: 'www.google.pl' },
      { name: 'Zajęcia', link: 'www.google.pl' },
      { name: 'Blog', link: 'www.google.pl' },
      { name: 'O nas', link: 'www.google.pl' },
      { name: 'Zajęcia', link: 'www.google.pl' },
      { name: 'Blog', link: 'www.google.pl' },
      { name: 'O nas', link: 'www.google.pl' },
    ];
    setRoutings(routings);

    const socialMedias = [
      { name: 'facebook', link: 'www.facebook.pl' },
      { name: 'instagram', link: 'www.instagram.com' },
      { name: 'youtube', link: 'www.youtube.pl' },
    ];
    setSocialMedias(socialMedias);

    const contact = {
      email: 'paczkowska.malgorzata@outlook.com',
      phone: '+48 515 515 515',
    };
    setContact(contact);
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <div className="mobile-menu">
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
