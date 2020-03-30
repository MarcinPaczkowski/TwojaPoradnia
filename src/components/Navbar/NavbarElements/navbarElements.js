import React from 'react';
import './navbarElements.scss';
import ImageWithLink from '../../Shared/ImageWithLink/imageWithLink';
import NavbarLinks from './NavbarLinks/navbarLinks';
import logo from '../../../images/logo1.png';

const NavbarElements = () => {
  const imageData = { link: '/', src: logo, alt: 'Twoja Poradnia Logo' };
  return (
    <div className="navbar-elements">
      <div className="navbar-elements__logo">
        <ImageWithLink imageData={imageData}></ImageWithLink>
      </div>
      <div className="navbar-elements__links">
        <NavbarLinks></NavbarLinks>
      </div>
    </div>
  );
};

export default NavbarElements;
