import { NowRequest, NowResponse } from '@now/node';
import { EmailService } from './Services/_emailService';

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
    throw new Error('');
  }
};

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const { body } = req;
    const { formData } = body;
    validateRequestBody(formData);
    const content = getEmailContent(formData);
    const subject = `Twoja Poradnia: Wiadomość od ${formData.fullName}`;
    const emailService = new EmailService();
    const response = await emailService.sendMail(
      formData.email,
      subject,
      content
    );
    res.status(response.isError ? 500 : 200).send(response.data);
  } catch (error) {
    res.status(500).send({
      error: 'Nie wszystkie obowiązkowe pola zostały wypełnione!',
    });
  }
};
