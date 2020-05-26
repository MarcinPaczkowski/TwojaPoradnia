import * as nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;
  private user: string = process.env.emailUser;
  private password: string = process.env.emailPassword;
  private recipient: string = process.env.emailRecipient;

  constructor() {
    this.transporter = nodemailer.createTransport(
      `smtps://${this.user}@gmail.com:${this.password}@smtp.gmail.com`
    );
  }

  async sendMail(to: string, subject: string, content: string) {
    console.log(`to: ${to}`);
    const options = {
      from: this.user,
      to: this.recipient,
      subject: subject,
      text: content,
    };

    const response = await this.transporter
      .sendMail(options)
      .then(response => {
        return { isError: false, data: 'Message was sent correct' };
      })
      .catch(error => {
        return { isError: true, data: error };
      });
    return response;
  }
}
