import React, { useState, useEffect } from 'react';
import './navbar.scss';
import NavbarElements from './NavbarElements/navbarElements';
import NavbarMobile from './NavbarMobile/navbarMobile';

const Navbar = ({ isHome }) => {
  const STICKY_MENU_MOBILE_OFFSET = 100;
  const STICKY_MENU_OFFSET = 120;
  const MIN_DESKTOP_WIDTH = 1201;

  const [isSticky, setIsSticky] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
  }, [isHome, isMobile]);

  const navbarBackgroundClasses = isSticky
    ? 'navbar__background navbar__sticky'
    : 'navbar__background';

  return (
    <nav className="navbar">
      <div className={navbarBackgroundClasses}></div>
      <div className="navbar__elements">
        <NavbarElements></NavbarElements>
      </div>
      {isMobile ? (
        <div className="navbar__mobile">
          <NavbarMobile></NavbarMobile>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
