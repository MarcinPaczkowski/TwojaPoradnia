import React from 'react';
import './mobileMenuIcon.scss';

const MobileMenuIcon = ({ clicked }) => (
  <div className="mobile-menu-icon">
    <input
      className="mobile-menu-icon__checkbox"
      type="checkbox"
      onChange={clicked}
    />
    <span className="mobile-menu-icon__bar"></span>
    <span className="mobile-menu-icon__bar"></span>
    <span className="mobile-menu-icon__bar"></span>
  </div>
);

export default MobileMenuIcon;
