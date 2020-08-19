import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.GATSBY_recaptchaSiteKey}>
      {element}
    </GoogleReCaptchaProvider>
  );
};
