import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const twilioMessage = await client.messages.create({
        body: `${email} has requested for your resume my boy!`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
      });
      res.status(200).json({ message: 'Text message sent successfully' });
    } catch (error) {
      console.error('Error sending text message:', error);
      res.status(500).json({ message: 'Error sending text message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
