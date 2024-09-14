import { NextResponse } from 'next/server';
import { ServerClient } from 'postmark';

const client = new ServerClient(process.env.POSTMARK_API_KEY);
export async function GET() {
    // Example response data
    const data = { message: 'Hello, this is a GET request! from send email route' };
    return NextResponse.json(data);
}
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const { to, subject, firstName, lastName, phone, message } = req.body;

    try {
      const response = await client.sendEmail({
        From: process.env.POSTMARK_FROM_EMAIL,
        To: to,
        Subject: subject,
        HtmlBody: `
          <table>
            <tr><td><b>First Name:</b></td><td>${firstName}</td></tr>
            <tr><td><b>Last Name:</b></td><td>${lastName}</td></tr>
            <tr><td><b>Phone:</b></td><td>${phone}</td></tr>
            <tr><td><b>Message:</b></td><td>${message}</td></tr>
          </table>
        `,
        TextBody: `
          First Name: ${firstName}\n
          Last Name: ${lastName}\n
          Phone: ${phone}\n
          Message: ${message}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
