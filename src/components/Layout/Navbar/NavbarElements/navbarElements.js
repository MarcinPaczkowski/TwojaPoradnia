import React, { useState, useEffect } from 'react';
import './navbarElements.scss';
import ImageLink from '../../../Shared/ImageLink/imageLink';
import NavbarLinks from './NavbarLinks/navbarLinks';
import logo from '../../../../images/logo.png';
import getRoutingData from '../../../../services/routingService';

const NavbarElements = () => {
  const [leftRoutings, setLeftRoutings] = useState([]);
  const [rightRoutings, setRightRoutings] = useState([]);

  useEffect(() => {
    const routings = getRoutingData();
    console.log(routings);
    setLeftRoutings(routings.filter(r => r.isLeft));
    setRightRoutings(routings.filter(r => !r.isLeft));
  }, []);

  const imageData = {
    link: '/',
    src: logo,
    alt: 'Twoja Pedagogiczna Pora Dnia Logo',
  };

  return (
    <div className="navbar-elements">
      <div className="navbar-elements__logo">
        <ImageLink imageData={imageData}></ImageLink>
      </div>
      <div className="navbar-elements__links navbar-elements__links--left">
        <NavbarLinks routings={leftRoutings}></NavbarLinks>
      </div>
      <div className="navbar-elements__links navbar-elements__links--right">
        <NavbarLinks routings={rightRoutings}></NavbarLinks>
      </div>
    </div>
  );
};

export default NavbarElements;
