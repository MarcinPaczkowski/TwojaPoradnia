import React, { useState, useEffect } from 'react';
import './contact.scss';
import ContactInformation from './ContactInformation/contactInformation';
import ContactForm from './ContactForm/contactForm';

const Contact = () => {
  const [setClearForm] = useState(false);

  const submitHandler = data => {
    console.log(data);
  };

  return (
    <div className="contact">
      <div className="contact__information">
        <ContactInformation />
      </div>
      <div className="contact__form">
        <ContactForm submitHandler={submitHandler} />
      </div>
    </div>
  );
};

export default Contact;
