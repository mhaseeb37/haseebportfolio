import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("ENV", process.env.RESEND_API_KEY);

export async function GET() {
    // Handle GET request
    const data = { message: 'Hello, this is a GET request! from send email route' };
    return NextResponse.json(data);
}

export async function POST(request) {
    try {
        // Parse the incoming request body
        const { to, subject, message, firstName, lastName, phone } = await request.json();
        console.log("Parsed Request Body:", { to, subject, message, firstName, lastName, phone });

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: "Muhammad Haseeb <info@muhammadhaseeb.site>",
            to: [to],
            subject: subject,
            html: `<strong>First Name:</strong> ${firstName} <br/>
                   <strong>Last Name:</strong> ${lastName} <br/>
                   <strong>Message:</strong> ${message} <br/>
                   <strong>Phone:</strong> ${phone}`
        });

        // Handle any errors from the Resend API
        if (error) {
            console.log(error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Return a success response
        return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        // Return error response
        return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
    }
}
