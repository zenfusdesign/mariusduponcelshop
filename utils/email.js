const nodemailer = require('nodemailer');
const { htmlToText} = require('html-to-text');
const pug = require('pug');
const path = require('path');

module.exports = class Email {
    constructor(user, products, totalPrice) {
        this.to = user.email;
        this.firstName = user.name.split(" ")[0];
        this.products = products;
        this.totalPrice = totalPrice;
        this.from = "ROGER ROGER mariusduponcel@mail.com"
    }

    newTransport() {
        return nodemailer.createTransport({
            service: 'SendinBlue',
            auth: {
                user: process.env.SENDINBLUE_USERNAME,
                pass: process.env.SENDINBLUE_PASSWORD
            }
        })
    }

    async send(template, subject) {
        //html template
        const html = pug.renderFile(path.join(__dirname, `../views/email/${template}.pug`), {
            firstName: this.firstName,
            products: this.products,
            subject: subject,
            totalPrice: this.totalPrice / 100
        })

        //email option
        const emailOptions = {
            from: this.from,
            to: this.to,
            subject: subject,
            html: html,
            text: htmlToText(html)
        }

        //send email with trand and option

        await this.newTransport().sendMail(emailOptions);
        console.log("email was sent ....")
    }

    async sendThankYou() {
        await this.send('thankyouEmail', 'Roger Roger - Purchase Confirmation')
    }
}