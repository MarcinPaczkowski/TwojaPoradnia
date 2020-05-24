import React from 'react';
import './contact.scss';
import ContactInformation from './ContactInformation/contactInformation';
import ContactForm from './ContactForm/contactForm';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__information">
        <ContactInformation />
      </div>
      <div className="contact__form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
