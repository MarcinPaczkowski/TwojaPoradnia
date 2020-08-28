import React, { useState, useEffect, useLayoutEffect } from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import './layout.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import LayoutContext from '../../contexts/LayoutContext';
import 'animate.css/animate.css';

const Layout = props => {
  const { children } = props;
  const [isHome, setIsHome] = useState(props.path === '/');

  useEffect(() => {
    setIsHome(props.path === '/');
  }, [props.path]);

  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const layoutContextValue = { breadcrumbs, setBreadcrumbs };

  return (
    <ParallaxProvider>
      <LayoutContext.Provider value={layoutContextValue}>
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
      </LayoutContext.Provider>
    </ParallaxProvider>
  );
};

export default Layout;
