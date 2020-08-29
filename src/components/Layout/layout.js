import React, { useState, useEffect, useLayoutEffect } from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Breadcrumbs from './Breadcrumbs/breadcrumbs';
import { ParallaxProvider } from 'react-scroll-parallax';
import LayoutContext from '../../contexts/LayoutContext';
import 'animate.css/animate.css';
import './layout.scss';
import '../../styles/style.scss';

const Layout = props => {
  const { children } = props;
  const [isHome, setIsHome] = useState(props.path === '/');

  useEffect(() => {
    setIsHome(props.path === '/');

    function handleResize() {
      const layoutElement = window.document.getElementsByClassName('layout')[0];
      layoutElement.style.minHeight = `${window.innerHeight}px`;
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [props]);

  useLayoutEffect(() => {
    const layoutElement = window.document.getElementsByClassName('layout')[0];
    isHome
      ? layoutElement.classList.add('layout--home')
      : layoutElement.classList.remove('layout--home');
  }, [isHome]);

  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const layoutContextValue = { breadcrumbs, setBreadcrumbs };

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      <LayoutContext.Consumer>
        {({ data, setData }) => {
          return (
            <div className={`layout`}>
              <div className="layout__navbar">
                <Navbar isHome={isHome} />
              </div>
              {/* <ParallaxProvider> */}
              <div className="layout__content">{children}</div>
              {/* </ParallaxProvider> */}
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
