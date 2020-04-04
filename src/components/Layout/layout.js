import React from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar></Navbar>
      </div>
      <div className="layout__content">{children}</div>
      <div className="layout__footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
