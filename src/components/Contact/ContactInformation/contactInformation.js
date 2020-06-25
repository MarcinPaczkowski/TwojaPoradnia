import React from 'react';
import './contactInformation.scss';
import ContactInformationRows from './ContactInformationRows/contactInformationRows';

const ContactInformation = ({ contactData }) => {
  return (
    <div className="contact-information">
      <h1 className="contact-information__title">Kontakt</h1>
      <div className="contact-information__rows">
        <ContactInformationRows contactData={contactData} />
      </div>
    </div>
  );
};

export default ContactInformation;
