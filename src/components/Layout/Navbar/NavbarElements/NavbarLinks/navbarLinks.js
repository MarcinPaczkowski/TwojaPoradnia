import React, { useState, useEffect } from 'react';
import './navbarLinks.scss';
import NavbarLink from './NavbarLink/navbarLink';

const NavbarLinks = ({ routings }) => {
  console.log(routings);
  return (
    <div className="navbar-links">
      {routings.map((r, i) => (
        <NavbarLink key={`${r.name}${i}`} routing={r}></NavbarLink>
      ))}
    </div>
  );
};

export default NavbarLinks;
