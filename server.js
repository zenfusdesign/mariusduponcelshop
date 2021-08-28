const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');

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

app.listen(5000, () => {
    console.log("server running 5000");
})