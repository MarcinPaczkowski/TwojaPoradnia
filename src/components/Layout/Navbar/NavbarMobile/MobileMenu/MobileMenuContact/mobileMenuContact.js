import React from 'react';
import './mobileMenuContact.scss';

const MobileMenuContact = ({ contact: { email, phone } }) => {
  return (
    <div className="mobile-menu-contact">
      <p className="mobile-menu-contact__item">{email}</p>
      <p className="mobile-menu-contact__item">{phone}</p>
    </div>
  );
};

export default MobileMenuContact;
