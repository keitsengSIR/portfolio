import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Contact API is running. Send a POST request to submit a message.' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: email,
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}