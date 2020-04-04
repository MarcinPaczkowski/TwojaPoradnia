import React, { useState, useEffect } from 'react';
import './navbar.scss';
import NavbarElements from './NavbarElements/navbarElements';
import NavbarMobile from './NavbarMobile/navbarMobile';

const Navbar = () => {
  const STICKY_MENU_OFFSET = 80;

  const [isSticky, setIsSticky] = useState(0);

  const isStickyHandler = () => {
    setIsSticky(window.scrollY >= STICKY_MENU_OFFSET);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', isStickyHandler);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', isStickyHandler);
    };
  }, []);

  const navbarClasses = isSticky ? 'navbar navbar__sticky' : 'navbar';

  return (
    <nav className={navbarClasses}>
      <div className="navbar__elements">
        <NavbarElements></NavbarElements>
      </div>
      <div className="navbar__mobile">
        <NavbarMobile></NavbarMobile>
      </div>
    </nav>
  );
};

export default Navbar;
