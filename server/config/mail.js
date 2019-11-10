const nodemailer = require('nodemailer');

let Email = {};

Email.transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: 'email-address-from',
            pass: 'password-autheticate-server-email'
        },
    },
    {
        from: 'subject-email-sended <email-address-from>',
        headers: {}
    }
);

module.exports = Email;