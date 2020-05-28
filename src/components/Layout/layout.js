import React, { useEffect } from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import { loadReCaptcha } from 'react-recaptcha-v3';
import GatsbyHelmet from '../Helmet/helmet';

const Layout = ({ children, isHome }) => {
  useEffect(() => {
    loadReCaptcha(process.env.GATSBY_recaptchaSiteKey);
  }, []);

  let layoutClasses = 'layout';
  if (isHome) {
    layoutClasses = `${layoutClasses} layout--home`;
  }
  return (
    <ParallaxProvider>
      <GatsbyHelmet />
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
