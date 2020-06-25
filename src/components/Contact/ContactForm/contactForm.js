import React, { useState, useEffect } from 'react';
import './contactForm.scss';
import Form from '../../Shared/Form/form';
import { getContactForm } from '../../../services/contactService';

const ContactForm = ({ submitHandler }) => {
  const [contactFormItems, setContactFormItems] = useState([]);

  useEffect(() => {
    setContactFormItems(getContactForm());
  }, []);

  return (
    <div className="contact-form">
      <h1 className="contact-form__title">Napisz do nas</h1>
      <Form
        submitted={submitHandler}
        items={contactFormItems}
        submitButtonText="Wyślij"
      />
    </div>
  );
};

export default ContactForm;
