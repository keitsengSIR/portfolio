import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // temp sender
        to: "miguelkeitseng5@gmail.com",
        subject: `New message from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error); //temp error logging
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
