import React, { useState, useEffect } from 'react';
import './navbar.scss';
import NavbarElements from './NavbarElements/navbarElements';
import NavbarMobile from './NavbarMobile/navbarMobile';

const Navbar = () => {
  const STICKY_MENU_OFFSET = 80;
  const MIN_DESKTOP_WIDTH = 1201;

  const [isSticky, setIsSticky] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.screen.width < MIN_DESKTOP_WIDTH
  );

  const isStickyHandler = () => {
    setIsSticky(window.scrollY >= STICKY_MENU_OFFSET);
  };

  const isMobileHandler = () => {
    setIsMobile(window.screen.width < MIN_DESKTOP_WIDTH);
  };

  useEffect(() => {
    window.addEventListener('scroll', isStickyHandler);
    window.addEventListener('resize', isMobileHandler);

    return () => {
      window.removeEventListener('scroll', isStickyHandler);
      window.removeEventListener('resize', isMobileHandler);
    };
  }, []);

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
