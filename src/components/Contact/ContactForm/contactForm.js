import React from 'react';
import './contactForm.scss';
import SubmitButton from '../../Shared/SubmitButton/submitButton';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="contact-form__title">Formularz kontaktowy</h1>
      <form className="contact-form__form">
        <input type="text" name="name" placeholder="Imię i nazwisko" />
        <input type="email" name="email" placeholder="Email" />
        <input type="phone" name="phone" placeholder="Telefon (opcjonalnie)" />
        <SubmitButton text="Wyślij"></SubmitButton>
      </form>
    </div>
  );
};

export default ContactForm;
