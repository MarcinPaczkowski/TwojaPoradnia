import React from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children, isHome }) => {
  let layoutClasses = 'layout';
  if (isHome) {
    layoutClasses = `${layoutClasses} layout--home`;
  }
  return (
    <ParallaxProvider>
      <div className={layoutClasses}>
        <div className="layout__navbar">
          <Navbar isHome={isHome} />
        </div>
        <div className="layout__content">{children}</div>
        <div className="layout__footer">
          <Footer></Footer>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Layout;
