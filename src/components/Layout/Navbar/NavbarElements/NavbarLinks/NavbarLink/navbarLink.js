import React from 'react';
import { Link } from 'gatsby';
import './navbarLink.scss';

const NavbarLink = ({ routing: { name, link } }) => (
  <Link className="navbar-link" to={link}>
    {name}
  </Link>
);

export default NavbarLink;
