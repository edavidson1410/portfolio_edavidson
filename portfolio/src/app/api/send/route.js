import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(props) {

    const { name, email, message } = props

  try {
    const data = await resend.emails.send({
      from: email,
      to: ['edavidson1410@gmail.com'],
      subject: `${name} Website Query`,
      text: message
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
