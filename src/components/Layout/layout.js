import React, { useState, useEffect, useLayoutEffect } from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import GatsbyHelmet from '../Helmet/helmet';
import LayoutContext from '../../contexts/LayoutContext';
import 'animate.css/animate.css';

const Layout = props => {
  const { children } = props;
  const [isHome, setIsHome] = useState(props.path === '/');

  useEffect(() => {
    setIsHome(props.path === '/');
  }, [props.path]);

  useLayoutEffect(() => {
    if (isHome) {
      window.document.getElementsByClassName(
        'welcome__background--image'
      )[0].style.height = `${window.innerHeight + 63}px`;
    }
  }, [isHome]);

  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const layoutContextValue = { breadcrumbs, setBreadcrumbs };

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      <ParallaxProvider>
        <LayoutContext.Consumer>
          {({ data, setData }) => {
            return (
              <div className={`layout ${isHome ? 'layout--home' : ''}`}>
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
                  <Footer />
                </div>
              </div>
            );
          }}
        </LayoutContext.Consumer>
      </ParallaxProvider>
    </LayoutContext.Provider>
  );
};

export default Layout;
