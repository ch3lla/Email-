const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type:'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        access_token: process.env.OAUTH_ACCESS_TOKEN
    }
});

let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME,
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err){ console.log('Error ' + err);
    } else {
        console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    }
});

transporter.close();

const port =  3000;
app.listen(port, () => {
    console.log(`nodemailerproject is listening at https:\\localhost:${port}`);
});