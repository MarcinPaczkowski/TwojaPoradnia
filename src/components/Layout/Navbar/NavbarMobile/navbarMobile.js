import React, { useState } from 'react';
import './navbarMobile.scss';
import MobileMenuIcon from './MobileMenuIcon/mobileMenuIcon';
import MobileMenu from './MobileMenu/mobileMenu';

const NavbarMobile = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenuActivationHandler = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <div className="navbar-mobile">
      <MobileMenuIcon
        clicked={() => toggleMobileMenuActivationHandler()}
      ></MobileMenuIcon>
      <MobileMenu isActive={isMobileMenuActive}></MobileMenu>
    </div>
  );
};

export default NavbarMobile;
