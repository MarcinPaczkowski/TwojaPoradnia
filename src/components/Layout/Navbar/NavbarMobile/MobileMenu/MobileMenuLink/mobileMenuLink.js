import React from 'react';
import './mobileMenuLink.scss';
import { Link } from 'gatsby';

const MobileMenuLink = ({ routing: { name, link } }) => {
  return (
    <Link
      className="mobile-menu-link"
      to={link}
      activeClassName="mobile-menu-link--active"
    >
      {name}
    </Link>
  );
};

export default MobileMenuLink;
