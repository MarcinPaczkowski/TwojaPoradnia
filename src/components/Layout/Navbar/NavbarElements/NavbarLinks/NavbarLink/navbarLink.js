import React from 'react';
import { Link } from 'gatsby';
import './navbarLink.scss';

const NavbarLink = ({ routing: { name, link } }) => (
  <Link className="navbar-link" to={link} activeClassName="navbar-link--active">
    {name}
  </Link>
);

export default NavbarLink;
