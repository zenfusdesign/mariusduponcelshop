stage = 'prod';
//stage = 'prod';
const host = stage === 'dev' ? 'http://localhost:5000' : 'https://stingray-app-7dqw6.ondigitalocean.app';

const stripe = Stripe('pk_test_51JOHrMGyuoCJq3eZg27ztkNzYHHzSm5CrNcXon1zppKeNxIgDN1bR63SDGFzMkECSWdmoNsaPkpZlyw0vrryDthK00exBuvydE');

function startCheckout() {
    let startCheckout = document.getElementById("startCheckout");
    startCheckout.textContent = "Processing...";
    buyProducts(myProducts());
}

function myProducts() {
    const getProducts = JSON.parse(localStorage.getItem('productsInCart'));

    const products = [ ];

    console.log(getProducts);
    for( const property in getProducts) {
        products.push({
            tag: getProducts[property].tag,
            inCart: getProducts[property].inCart,
            size: getProducts[property].size
        })
    }

    return products;
}
async function buyProducts(cartProducts) {
    try {

        const body = JSON.stringify({
            products: cartProducts
        })

        const response = await axios.post(`${host}/checkout`, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })

        console.log(response.data);

        localStorage.setItem('sessionId', response.data.session.id);

        await stripe.redirectToCheckout({
            sessionId: response.data.session.id
        })

    } catch (error) {
        console.log(error);
    }
}