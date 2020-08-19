import React, { useState, useEffect } from 'react';
import './contact.scss';
import ContactInformation from './ContactInformation/contactInformation';
import ContactForm from './ContactForm/contactForm';
import axios from 'axios';
import StickyLabel from '../Shared/StickyLabel/stickyLabel';
import stickyLabelTypes from '../Shared/StickyLabel/stickyLabelTypes';
import Spinner from '../Shared/Spinner/spinner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Section from '../Layout/Section/section';

const Contact = ({ contactData }) => {
  const LABEL_TIME = 10000;
  const [confirmationLabel, setConfirmationLabel] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (confirmationLabel) {
      setTimeout(() => setConfirmationLabel(null), LABEL_TIME);
    }
  }, [confirmationLabel]);

  const submitHandler = async data => {
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha('CONTACT_FORM');
    setShowSpinner(true);

    let response;

    try {
      response = await sendEmail(data, token);
    } finally {
      setShowSpinner(false);
      processResponse(response);
    }
  };

  const processResponse = ({ status }) => {
    if (status !== 200) {
      setConfirmationLabel({
        type: stickyLabelTypes.ERROR,
        message:
          'Coś poszło nie tak w trakcie wysyłania wiadomości. Spróbuj ponownie.',
      });
    } else {
      setConfirmationLabel({
        type: stickyLabelTypes.SUCCESS,
        message: 'Twoja wiadomość została wysłana.',
      });
    }
  };

  const sendEmail = async (formData, recaptchaToken) => {
    const response = await axios.post(
      '/api/sendEmail',
      {
        formData,
        recaptchaToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  };

  return (
    <Section>
      <div className="contact">
        <div className="contact__information">
          <ContactInformation contactData={contactData} />
        </div>
        <div className="contact__form">
          <ContactForm submitHandler={submitHandler} />
        </div>
        {confirmationLabel ? (
          <StickyLabel
            type={confirmationLabel.type}
            message={confirmationLabel.message}
            close={() => setConfirmationLabel(null)}
          />
        ) : null}
        {showSpinner ? <Spinner /> : null}

        {/* <ReCaptcha
          sitekey={process.env.GATSBY_recaptchaSiteKey}
          action="CONTACT_FORM"
          callback={token => {
            setRecaptchaToken(token);
          }}
          id="g-recaptcha_contact"
          badge="bottomright"
        /> */}
      </div>
    </Section>
  );
};

export default Contact;
