const nodemailer = require('nodemailer');

let Email = {};

Email.transporter = nodemailer.createTransport(
    {
        service: 'Gmail',
        auth: {
            user: 'gdmartinez.sandino@gmail.com',
            pass: 'dvqhhyowytiebpoj'
        },
    },
    {
        from: 'GOODJOB Application <info@enso.com>',
        headers: {}
    }
);

module.exports = Email;