import React, { useState, useEffect } from 'react';
import './contactForm.scss';
import Form from '../../Shared/Form/form';
import { getContactForm } from '../../../services/contactService';
import HeaderTitle from '../../Shared/HeaderTitle/headerTitle';

const ContactForm = ({ submitHandler }) => {
  const [contactFormItems, setContactFormItems] = useState([]);

  useEffect(() => {
    setContactFormItems(getContactForm());
  }, []);

  return (
    <div className="contact-form">
      <div className="contact-form__title">
        <HeaderTitle title="Napisz do nas" />
      </div>
      <Form
        submitted={submitHandler}
        items={contactFormItems}
        submitButtonText="Wyślij"
      />
    </div>
  );
};

export default ContactForm;
