import React from 'react';
import './cookieBanner.scss';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Rozumiem i akceptuję"
      buttonClasses="cookie-banner__confirm"
      contentClasses="cookie-banner__content"
      cookieName="policyConsent"
      containerClasses="cookie-banner"
      expires={30}
    >
      Na tej stronie używamy plików cookie. Korzystając z niej, zgadzasz się na
      to.
    </CookieConsent>
  );
};

export default CookieBanner;
