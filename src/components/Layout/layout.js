import React, { useState, useEffect, useLayoutEffect } from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import LayoutContext from '../../contexts/LayoutContext';
import 'animate.css/animate.css';

const Layout = props => {
  console.log(props);
  const { children } = props;
  const [isHome, setIsHome] = useState(props.path === '/');

  useEffect(() => {
    setIsHome(props.path === '/');
  }, [props.path]);

  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const layoutContextValue = { breadcrumbs, setBreadcrumbs };

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      <LayoutContext.Consumer>
        {({ data, setData }) => {
          return (
            <div className={`layout ${isHome ? 'layout--home' : ''}`}>
              <div className="layout__navbar">
                <Navbar isHome={isHome} />
              </div>
              <ParallaxProvider>
                <div className="layout__content">{children}</div>
              </ParallaxProvider>
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
    </LayoutContext.Provider>
  );
};

export default Layout;
