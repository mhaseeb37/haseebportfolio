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
    const { to, subject, message } = req.body;

    try {
        const response = await client.sendEmail({
            From: process.env.POSTMARK_FROM_EMAIL,  // Sender's email from environment variable
            To: to,
            Subject: subject,
            TextBody: message,
            HtmlBody: `<html><body><strong>${message}</strong></body></html>`,
            MessageStream: 'outbound',  // Use 'outbound' for regular emails
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
