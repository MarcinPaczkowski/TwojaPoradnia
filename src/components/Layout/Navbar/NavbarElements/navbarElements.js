import React from 'react';
import './navbarElements.scss';
import ImageLink from '../../../Shared/ImageLink/imageLink';
import NavbarLinks from './NavbarLinks/navbarLinks';
import logo from '../../../../images/logo.png';

const NavbarElements = () => {
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
      <div className="navbar-elements__links">
        <NavbarLinks></NavbarLinks>
      </div>
    </div>
  );
};

export default NavbarElements;