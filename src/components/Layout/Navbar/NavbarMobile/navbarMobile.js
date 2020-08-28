import React, { useState } from 'react';
import './navbarMobile.scss';
import MobileMenuIcon from './MobileMenuIcon/mobileMenuIcon';
import MobileMenu from './MobileMenu/mobileMenu';

const NavbarMobile = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenuActivationHandler = () => {
    const newState = !isMobileMenuActive;
    const icon = window.document.getElementsByClassName(
      'mobile-menu-icon__checkbox'
    )[0];
    icon.style.pointerEvents = 'none';
    setTimeout(() => {
      icon.style.pointerEvents = 'all';
    }, 800);

    if (!newState) {
      const nav = window.document.getElementsByClassName('mobile-menu')[0];
      nav.classList.remove('animate__slideInRight');
      nav.classList.add('animate__slideOutRight');

      setTimeout(() => {
        setIsMobileMenuActive(newState);
      }, 800);
    } else {
      setIsMobileMenuActive(newState);
    }
  };

  return (
    <div className="navbar-mobile">
      <MobileMenuIcon
        clicked={() => toggleMobileMenuActivationHandler()}
      ></MobileMenuIcon>
      <MobileMenu isActive={isMobileMenuActive} />
    </div>
  );
};

export default NavbarMobile;
