import React from 'react';
import {
  FaSmile,
  FaEnvelope,
  FaHome,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from 'react-icons/fa';
import './contactInformation.scss';

const ContactInformation = ({
  contactData: {
    fullName,
    address,
    email,
    nip,
    phone,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
  },
}) => {
  return (
    <div className="contact-information">
      <h1 className="contact-information__title">Kontakt</h1>
      <div className="contact-information__row">
        <FaSmile />
        <p className="contact-information__row--item">{fullName}</p>
      </div>
      <div className="contact-information__row">
        <FaEnvelope />
        <a className="contact-information__row--item" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="contact-information__row">
        <FaPhone />
        <a className="contact-information__row--item" href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
      <div className="contact-information__row">
        <FaHome />
        <p className="contact-information__row--item">{address}</p>
      </div>
      <div className="contact-information__row">
        <span>NIP</span>
        <p className="contact-information__row--item">{nip}</p>
      </div>
      {facebookUrl ? (
        <div className="contact-information__row">
          <FaFacebook />
          <a
            className="contact-information__row--item"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      ) : null}
      {instagramUrl ? (
        <div className="contact-information__row">
          <FaInstagram />
          <a
            className="contact-information__row--item"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      ) : null}
      {youtubeUrl ? (
        <div className="contact-information__row">
          <FaYoutube />
          <a
            className="contact-information__row--item"
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default ContactInformation;
