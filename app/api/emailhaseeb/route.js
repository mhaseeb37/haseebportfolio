import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// For handling GET requests
export async function GET() {
    // Example response data
    const data = { message: 'Hello, this is a GET request!' };
    return NextResponse.json(data);
}

// For handling POST requests
export async function POST(request) {
  // Parse the request body
  const body = await request.json();

  // Example response data
  const data = {
      message: 'Hello, this is a POST request!',
      receivedData: body,
  };
  

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USERNAMEGMAIL,
    pass: process.env.PASSWORDGMAIL,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: process.env.USERNAMEGMAIL, // sender address
    to: body.to, // list of receivers
    subject: body.subject, // Subject line
    text: body.message, // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);


  return NextResponse.json(data);
}