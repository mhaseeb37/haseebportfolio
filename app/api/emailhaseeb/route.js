import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    const data = { message: 'Hello, this is a GET request!' };
    return res.status(200).json(data);
  } else if (req.method === 'POST') {
    try {
      const body = req.body;

      // Create Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.USERNAMEGMAIL,
          pass: process.env.PASSWORDGMAIL,
        },
      });

      // Send email using the transporter
      const info = await transporter.sendMail({
        from: process.env.USERNAMEGMAIL, // sender address
        to: body.to, // list of receivers
        subject: body.subject, // Subject line
        text: body.message, // plain text body
      });

      console.log('Message sent: %s', info.messageId);

      // Send success response
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
