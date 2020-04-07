import React from 'react';
import './mobileMenuSocialMedia.scss';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const MobileMenuSocialMedia = ({ socialMedia: { name, link } }) => {
  let socialMediaIcon;
  switch (name) {
    case 'facebook':
      socialMediaIcon = <FaFacebook size="40px" color="#006699" />;
      break;
    case 'youtube':
      socialMediaIcon = <FaYoutube size="40px" color="#006699" />;
      break;
    case 'instagram':
      socialMediaIcon = <FaInstagram size="40px" color="#006699" />;
      break;
    default:
      socialMediaIcon = null;
      break;
  }

  if (socialMediaIcon === null) return null;

  return (
    <a
      className="mobile-menu-social-media"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {socialMediaIcon}
    </a>
  );
};

export default MobileMenuSocialMedia;
