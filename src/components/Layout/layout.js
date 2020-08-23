import React from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import GatsbyHelmet from '../Helmet/helmet';

const Layout = ({ children, isHome, breadcrumbs }) => {
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
        {breadcrumbs ? (
          <div className="layout__breadcrumbs">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        ) : null}
        <div className="layout__footer">
          <Footer></Footer>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Layout;
