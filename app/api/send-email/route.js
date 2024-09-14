
import postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, firstName, lastName, message } = req.body;

    try {
      const response = await client.sendEmail({
        From: process.env.POSTMARK_FROM_EMAIL,
        To: to,
        Subject: subject,
        TextBody: `<table>
        <tr><td><b>First Name: </b></td><td>${firstName}</td></tr>
        <tr><td><b>Last Name: </b></td><td>${lastName}</td></tr>
        <tr><td><b>Message: </b></td><td>${message}</td></tr>
        </table>`
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
