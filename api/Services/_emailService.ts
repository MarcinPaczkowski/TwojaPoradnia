import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';
const { OAuth2 } = google.auth;

export class EmailService {
  private clientId: string = process.env.MAILING_SERVICE_CLIENT_ID;
  private clientSecret: string = process.env.MAILING_SERVICE_CLIENT_SECRET;
  private refreshToken: string = process.env.MAILING_SERVICE_REFRESH_TOKEN;
  private transporter: nodemailer.Transporter;
  private user: string = process.env.emailUser;
  // private password: string = process.env.emailPassword;
  private recipient: string = process.env.emailRecipient;
  private OAUTH_PLAYGROUND: string =
    'https://developers.google.com/oauthplayground';

  constructor() {
    const oauth2Client = new OAuth2(
      this.clientId,
      this.clientSecret,
      this.OAUTH_PLAYGROUND
    );

    oauth2Client.setCredentials({
      refresh_token: this.refreshToken,
    });
    const accessToken = oauth2Client.getAccessToken();

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: this.user,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.refreshToken,
        accessToken,
      },
    });
  }

  async sendMail(subject: string, content: string) {
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
