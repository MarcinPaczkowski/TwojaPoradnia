import React from 'react';
import './navbarLinks.scss';
import NavbarLink from './NavbarLink/navbarLink';
import { v4 as uuid } from 'uuid';

const NavbarLinks = ({ routings, isLeft }) => {
  return (
    <ul
      className={`navbar-links ${
        isLeft ? 'navbar-links--left' : 'navbar-links--right'
      }`}
    >
      {routings.map((r, i) => (
        <NavbarLink key={uuid()} routing={r}></NavbarLink>
      ))}
    </ul>
  );
};

export default NavbarLinks;
