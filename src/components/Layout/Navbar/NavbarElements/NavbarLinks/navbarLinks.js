import React, { useState, useEffect } from 'react';
import './navbarLinks.scss';
import NavbarLink from './NavbarLink/navbarLink';
import { getRoutingData } from '../../../../../services/routingService';

const NavbarLinks = () => {
  const [routings, setRoutings] = useState([]);

  useEffect(() => {
    const routings = getRoutingData();
    setRoutings(routings);
  }, []);
  return (
    <div className="navbar-links">
      {routings.map((r, i) => (
        <NavbarLink key={`${r.name}${i}`} routing={r}></NavbarLink>
      ))}
    </div>
  );
};

export default NavbarLinks;
