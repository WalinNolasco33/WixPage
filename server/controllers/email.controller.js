import nodemailer from "nodemailer";

export const SendEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_NODEMAILER,
      pass: process.env.PASS_APLICATION,
    },
  });

  transporter.verify()
    .then(() => {
      console.info("Listo para enviar correos electrónicos");
    })
    .catch((error) => {
      console.error("Error al verificar el transportista:", error);
      res.status(500).json({ message: "Error al verificar el transportista" });
    });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_NODEMAILER,
      subject: "ElPOLONORTE MESSAGE",
      text: message
    });

    console.log(`Mensaje enviado: %s ${await info.messageId}`);
    res.status(201).json({ message: `Mensaje enviado: %s ${await info.messageId}` });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).json({ message: "Error al enviar el correo electrónico" });
  }
};
