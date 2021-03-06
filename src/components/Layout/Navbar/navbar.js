import React, { useState, useLayoutEffect } from 'react';
import './navbar.scss';
import NavbarElements from './NavbarElements/navbarElements';
import NavbarMobile from './NavbarMobile/navbarMobile';

const Navbar = ({ isHome }) => {
  const STICKY_MENU_MOBILE_OFFSET = 100;
  const STICKY_MENU_OFFSET = 120;
  const MIN_DESKTOP_WIDTH = 1201;

  const [isSticky, setIsSticky] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const isStickyHandler = () => {
      let offset = isMobile ? STICKY_MENU_MOBILE_OFFSET : STICKY_MENU_OFFSET;
      if (isHome) {
        offset = window.innerHeight - offset;
      }
      setIsSticky(window.scrollY >= offset);
    };

    const isMobileHandler = () => {
      setIsMobile(window.innerWidth < MIN_DESKTOP_WIDTH);
    };

    setIsMobile(window.innerWidth < MIN_DESKTOP_WIDTH);
    window.addEventListener('scroll', isStickyHandler);
    window.addEventListener('resize', isMobileHandler);

    return () => {
      window.removeEventListener('scroll', isStickyHandler);
      window.removeEventListener('resize', isMobileHandler);
    };
  }, [isMobile, isHome]);

  const navbarBackgroundClasses = isSticky
    ? 'navbar__background navbar__sticky'
    : 'navbar__background';

  return (
    <div className="navbar">
      <div className={navbarBackgroundClasses}></div>
      <div className="navbar__elements">
        <NavbarElements />
      </div>
      {isMobile ? (
        <div className="navbar__mobile">
          <NavbarMobile />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
