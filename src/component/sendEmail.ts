import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: "3350b891fd4045c447615e23051b53c0-6fafb9bf-ddd341c4", // Replace with your Mailgun API key
  domain: "sandboxa786c66722c04f1ea6b5c9af7e929538.mailgun.org", // Replace with your Mailgun domain
  testMode: false, // Set to true to enable Mailgun's test mode for debugging
});

const sendEmail = async (
  to: string,
  subject: string,
  text: string
): Promise<void> => {
  const data = {
    from: "adeyemoademola12@gmail.com", // Replace with your email
    to,
    subject,
    text,
  };

  try {
    const response = await mg.messages().send(data);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
