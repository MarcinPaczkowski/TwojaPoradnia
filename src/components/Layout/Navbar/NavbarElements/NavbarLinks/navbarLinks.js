import React from 'react';
import './navbarLinks.scss';
import NavbarLink from './NavbarLink/navbarLink';
import { v4 as uuid } from 'uuid';

const NavbarLinks = ({ routings }) => {
  return (
    <div className="navbar-links">
      {routings.map((r, i) => (
        <NavbarLink key={uuid()} routing={r}></NavbarLink>
      ))}
    </div>
  );
};

export default NavbarLinks;
