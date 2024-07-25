// pages/api/saveEmail.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Add logic to save the email, e.g., save to database or send to an email marketing service
    console.log("Email received:", email);

    res.status(200).json({ message: "Email saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
