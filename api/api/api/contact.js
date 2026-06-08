import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body || (await req.json?.()) || {};

      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "Server configuration error" });
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "miguelkeitseng5@gmail.com",
        subject: `New message from ${name || "Unknown Sender"}`,
        html: `<p><strong>Email:</strong> ${email || "No email provided"}</p>
               <p>${message || "No message provided"}</p>`,
      });

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Resend error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
