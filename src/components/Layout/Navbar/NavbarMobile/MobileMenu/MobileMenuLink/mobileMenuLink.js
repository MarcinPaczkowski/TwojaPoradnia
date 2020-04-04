import React from 'react';
import './mobileMenuLink.scss';

const MobileMenuLink = ({ routing: { name, link } }) => {
  return (
    <a className="mobile-menu-link" href={link}>
      {name}
    </a>
  );
};

export default MobileMenuLink;
