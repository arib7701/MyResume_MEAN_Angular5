const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('../config/database');

//Parameters
const user_name = config.user_name;
const refresh_token = config.refresh_token;
const access_token = config.access_token;
const client_id = config.client_id;
const client_secret = config.client_secret;

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    clientId: client_id,
    clientSecret: client_secret
  }
});

//Send Email
module.exports.sendEmail = function(data, callback) {
  var mailOptions = {
    from: '"From "' + data.email, // sender address
    to: 'aribotprojects@gmail.com', // list of receivers
    subject: 'Message from ' + data.firstName + ' ' + data.lastName, // Subject line
    text: data.phone + ' / ' + data.email + ' / ' + data.mess, // plaintext body

    auth: {
      user: user_name,
      refreshToken: refresh_token,
      accessToken: access_token,
      expires: 1494388182480
    }
  };

  transporter.sendMail(mailOptions, callback);
};
