import nc from "next-connect";
var nodemailer = require("nodemailer");

const renderHTML = (message) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
    <title>Message</title>
   
  </head>
  <body>
      <header>
        <h1>${message.title}</h1>

        <h3>Subject: ${message.mail_info.subject}</h3>

        <h3>From: ${message.mail_info.name}</h3>
        <h4>${message.mail_info.email}</h4>

        <p>${message.mail_info.message}</p>
    </header>
    <main>
    </main>
  </body>
    </html>
    `;

  return html;
};

var transporter = nodemailer.createTransport({
  service: "yahoo",
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

const handler = nc().post(async (req, res) => {
  const message = {
    ...req.body,
    title: "MY SITE CONTACT",
    id: Date.now(),
  };

  var mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.TARGET_MAIL,
    subject: "Message from my site",
    text: JSON.stringify(message),
    html: renderHTML(message),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.send(
        JSON.stringify({ success: true, message: "Message sent. Thanks for reaching out!" })
      );
    }
  });
});
export default handler;
