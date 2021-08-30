const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');
app.post('/', (req, res )=>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GM_MAIL,
            pass: process.env.GM_PASS,
        }

    })

    const mailOption = {
        from: req.body.email,
        to: process.env.GM_MAIL,
        subject: `Demande de ${req.body.email}: ${req.body.subject}`,
        text: `message de ${req.body.firstName} ${req.body.lastName}   
        
        ${req.body.messages}`
    }

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('email sucess');
            res.send('sucess');
        }
    })
})

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error connecting to Database');
    }
}

connectDB();

app.use('/', require('./routes/pages'));

app.use('/products', require('./routes/products'));
app.use('/checkout', require('./routes/checkout'));

app.use(function(req, res, next) {
    res.status(404).render('404error'
    )});

app.listen(5000, () => {
    console.log("server running 5000");
})