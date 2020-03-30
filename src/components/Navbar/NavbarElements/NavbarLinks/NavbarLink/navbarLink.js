import React from 'react';
import './navbarLink.scss';

const NavbarLink = ({ routing: { name, link } }) => (
  <a className="navbar-link" href={link}>
    {name}
  </a>
);

export default NavbarLink;
