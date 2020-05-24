import React from 'react';
import { FaSmile, FaEnvelope, FaHome, FaFacebook } from 'react-icons/fa';
import './contactInformation.scss';

const ContactInformation = () => {
  return (
    <div className="contact-information">
      <h1 className="contact-information__title">Kontakt</h1>
      <div className="contact-information__row">
        <FaSmile />
        <p className="contact-information__row--item">Małgorzata Paczkowska</p>
      </div>
      <div className="contact-information__row">
        <FaEnvelope />
        <a
          className="contact-information__row--item"
          href="mailto:test@test.pl"
        >
          test@test.pl
        </a>
      </div>
      <div className="contact-information__row">
        <FaHome />
        <p className="contact-information__row--item">Września</p>
      </div>
      <div className="contact-information__row">
        <span>NIP</span>
        <p className="contact-information__row--item">1234567890</p>
      </div>
      <div className="contact-information__row">
        <FaFacebook />
        <p className="contact-information__row--item">Facebook</p>
      </div>
    </div>
  );
};

export default ContactInformation;
