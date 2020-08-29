import { NowRequest, NowResponse } from '@now/node';
import { EmailService } from './Services/_emailService';
import { verifyRecaptcha } from './Services/_reCaptchaService';

const getEmailContent = ({ fullName, email, phone, message }) => {
  const content = `
    Imię i nazwisko: ${fullName}
    Telefon: ${phone}
    Email: ${email}
    Wiadomość: ${message}
  `;
  return content;
};

const validateRequestBody = ({ fullName, email, message }) => {
  if (!fullName || !email || !message) {
    throw new Error('Nie wszystkie obowiązkowe pola zostały wypełnione!');
  }
};

const sendEmial = async formData => {
  const content = getEmailContent(formData);
  const subject = `Twoja Poradnia: Wiadomość od ${formData.fullName}`;
  const emailService = new EmailService();
  const response = await emailService.sendMail(subject, content);
  return response;
};

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const { body } = req;
    const { formData, recaptchaToken } = body;
    const captchaResponse = await verifyRecaptcha(
      recaptchaToken,
      process.env.GATSBY_recaptchaApiKey,
      +process.env.GATSBY_recaptchaTreshold
    );
    if (!captchaResponse.success) {
      res.status(500).send(captchaResponse);
      return;
    }
    validateRequestBody(formData);
    const emailResponse = await sendEmial(formData);
    res.status(emailResponse.isError ? 500 : 200).send(emailResponse.data);
  } catch (error) {
    res.status(500).send(error);
  }
};
