import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { firstName, lastName, email, phone, subject, message } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'All fields are required' }),
      };
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@sattva.hu',
      subject: `Új kapcsolatfelvétel: ${subject}`,
      html: `
        <h2>Új kapcsolatfelvételi űrlap beérkezett</h2>
        <p><strong>Név:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefonszám:</strong> ${phone}</p>
        <p><strong>Tárgy:</strong> ${subject}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sikeresen elküldve!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Hiba történt az email küldése során.' }),
    };
  }
};
