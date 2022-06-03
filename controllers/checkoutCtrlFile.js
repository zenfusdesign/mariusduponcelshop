const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { productList } = require('../products');
const Email = require('../utils/email');
const Order = require('../models/orderModel');

exports.checkoutCtrlFunction = async (req, res) => {
    try {
        const productsFromFrontend = req.body.products;

        console.log(productsFromFrontend);

        function productsToBuy() {
            let products = [];
            console.log(products);

            productList.forEach( singleProductList => {
                productsFromFrontend.forEach(singleProductFrontend => {
                    if( singleProductList.tag === singleProductFrontend.tag ) {
                        products.push({
                            name: singleProductList.name,
                            description: singleProductList.name +" "+ singleProductFrontend.size,
                            images: [singleProductList.image],
                            amount: singleProductList.price * 100,
                            currency: 'usd',
                            quantity: singleProductFrontend.inCart
                        })
                    }
                })
            })

            return products
        }

        console.log(productsToBuy())

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
            cancel_url: `${req.protocol}://${req.get('host')}/`,
            shipping_address_collection: {
                allowed_countries: ['FR', 'GB', 'BE', 'SE']
            },
            line_items: productsToBuy()
        });

        res.status(200).json({
            status: "success",
            session: session
        })
    } catch (error) {
        console.log(error);
    }
}

exports.cartSuccessFunction = (req, res) => {
    res.render('thankyouPage');
}

exports.finishOrder = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(
        req.params.id
    )

    const sessionitems = await stripe.checkout.sessions.listLineItems(
        req.params.id
    )

    console.log(sessionitems);
    console.log(session);


    if(session.payment_status === "paid") {
        const purchasedProducts = sessionitems.data.map(product => (
            {
                productName: product.description,
                price: product.amount_total / 100,
                quantity: product.quantity
            }
        ))

        //save transaction into the database
        await Order.create({
            userName: session.shipping.name,
            userEmail: session.customer_details.email,
            products: purchasedProducts,
            totalPrice: session.amount_total / 100
        })

        console.log("Purchased saved on Database");

        console.log("products are:");
        console.log(purchasedProducts);
        //send an email
        await new Email({
            name: session.shipping.name,
            email: session.customer_details.email
        }, purchasedProducts, session.amount_total).sendThankYou();

        return res.status(200).json({
            success: true
        })
    }

    res.status(200).json({
        success: false
    })
}