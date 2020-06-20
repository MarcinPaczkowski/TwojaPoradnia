import React from 'react';
import './mobileMenuContact.scss';

const MobileMenuContact = ({ email, phone }) => {
  return (
    <div className="mobile-menu-contact">
      <a className="mobile-menu-contact__item" href={`mailto:${email}`}>
        {email}
      </a>
      <a className="mobile-menu-contact__item" href={`tel:${phone}`}>
        {phone}
      </a>
    </div>
  );
};

export default MobileMenuContact;
