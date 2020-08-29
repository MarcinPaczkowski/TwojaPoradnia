import React from 'react';
import { Link } from 'gatsby';
import './navbarLink.scss';

const NavbarLink = ({ routing: { name, link } }) => {
  const isActive = ({ location }) => {
    if (location.pathname.includes(link)) {
      return { className: 'navbar-link__item navbar-link__item--active' };
    }

    return null;
  };

  return (
    <li className="navbar-link">
      <Link className="navbar-link__item" to={link} getProps={isActive}>
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
