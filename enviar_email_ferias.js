const nodemailer = require('nodemailer');
const emailConfig = {
  host: 'seu_host',
  port: 587,
  secure: false,
  auth: {
    user: 'seu_email',
    pass: 'sua_senha'
  }
};

function sendVacationEmail(to, subject, message) {
    // Cria um novo transporter usando as configurações de e-mail
    let transporter = nodemailer.createTransport(emailConfig);
  
    // Define as opções de e-mail
    let mailOptions = {
      from: 'seu_email',
      to: to,
      subject: subject,
      html: message
    };
  
    // Envia o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email enviado: ' + info.response);
    });
  }

  
  let to = 'destinatario@email.com';
  let subject = 'Férias';
  let message = '<p>Estou de férias e volto em breve.</p>';
  sendVacationEmail(to, subject, message);
  