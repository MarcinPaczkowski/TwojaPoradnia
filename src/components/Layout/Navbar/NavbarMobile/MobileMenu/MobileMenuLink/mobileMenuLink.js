import React from 'react';
import './mobileMenuLink.scss';
import { Link, navigate } from 'gatsby';

const MobileMenuLink = ({ routing: { name, link }, click }) => {
  const clickHandler = e => {
    e.preventDefault();
    navigate(link);
    click();
  };
  const isActive = ({ location }) => {
    if (
      (location.pathname === link && link === '/') ||
      (location.pathname.includes(link) && link !== '/')
    ) {
      return {
        className: 'mobile-menu-link__item mobile-menu-link__item--active',
      };
    }

    return null;
  };

  return (
    <li className="mobile-menu-link">
      <Link
        className="mobile-menu-link__item"
        to={link}
        getProps={isActive}
        onClick={e => clickHandler(e)}
      >
        {name}
      </Link>
    </li>
  );
};

export default MobileMenuLink;
