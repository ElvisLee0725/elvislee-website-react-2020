const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRIDAPIKEY);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/formSend', (req, res) => {
    const { email, message } = req.body;
    const msg = {
        to: 'elvislee0725@gmail.com',
        from: 'elvis0725@hotmail.com',
        subject: 'You have a new message from elvislee.com',
        text: `From: ${email} 
        ${message}`,
        html: `<p>From: ${email}</p> 
        <p>${message}</p>`
    }

    sgMail.send(msg)
        .then(() => {
            console.log(`Message from ${email} was sent successfully.`);
        })
        .catch((err) => {
            console.log('Error: ' + err.message);
        });
});

app.set('port', 8080);

app.listen(8080, () => {
    console.log('server on.');
});