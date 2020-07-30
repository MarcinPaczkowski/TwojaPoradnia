import React from 'react';
import './contactInformation.scss';
import ContactInformationRows from './ContactInformationRows/contactInformationRows';
import HeaderTitle from '../../Shared/HeaderTitle/headerTitle';

const ContactInformation = ({ contactData }) => {
  return (
    <div className="contact-information">
      <div className="contact-information__title">
        <HeaderTitle title="Kontakt" />
      </div>
      <div className="contact-information__rows">
        <ContactInformationRows contactData={contactData} />
      </div>
    </div>
  );
};

export default ContactInformation;
