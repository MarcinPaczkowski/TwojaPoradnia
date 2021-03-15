import * as nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;
  private host: string = process.env.emailServiceSmtpHost;
  private port: string = process.env.emailServiceSmtpPort;
  private user: string = process.env.emailServiceSmtpUser;
  private password: string = process.env.emailServiceSmtpPassword;
  private recipient: string = process.env.emailServiceRecipient;
  private sender: string = process.env.emailServiceSender;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: this.host,
      port: +this.port,
      secure: true,
      auth: {
        user: this.user,
        pass: this.password
      },
    });
  }

  async sendMail(subject: string, content: string) {
    const options = {
      from: this.sender,
      to: this.recipient,
      subject: subject,
      text: content,
    };

    const response = await this.transporter
      .sendMail(options)
      .then(res => {
        return { isError: false, data: 'Message was sent correct' };
      })
      .catch(error => {
        return { isError: true, data: error };
      });
    return response;
  }
}
