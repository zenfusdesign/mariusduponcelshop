let carts = document.querySelectorAll('.btn-add')

let products = [];

const contactForm = document.querySelector('.contact-form');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let messages = document.getElementById('message');

let docdaaaa = document.getElementsByClassName('c-loader');

function loader() {
    document.querySelector('.c-loader').classList.remove('displaynone');
    document.body.style.cursor = 'none';
    window.onload=function(){
        document.querySelector('.c-loader').classList.add('displaynone');
        document.body.style.cursor = 'default';
    }
}

if (docdaaaa.length == 1) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('.c-loader').classList.remove('displaynone');
        document.body.style.cursor = 'none';


        let formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            subject: subject.value,
            messages: messages.value
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'sucess') {
                firstName.value = '';
                lastName.value = '';
                email.value = '';
                subject.value = '';
                messages.value = '';
                document.getElementById('successgrp').classList.remove('displaynone')
                document.getElementById('wrap').classList.add('displaynone');
                document.querySelector('.c-loader').classList.add('displaynone');
                document.body.style.cursor = 'default';
            } else {
                alert('something went wrong');
            }
        }

        xhr.send(JSON.stringify(formData));
    })
}

function previous1 () {
    let currentselect2 = document.getElementsByClassName("is-selected2")


    if (currentselect2.length == 0) {
       document.getElementById("itemimg2").classList.add("is-selected2")

    } else {
        document.getElementById("itemimg2").classList.remove("is-selected2")
    }

}

function next1 () {
    let currentselect3 = document.getElementsByClassName("is-selected2")

    if (currentselect3.length == 0) {
        document.getElementById("itemimg2").classList.add("is-selected2")
    } else {
        console.log('remove')
        document.getElementById("itemimg2").classList.remove("is-selected2")
    }

}

function datazoom() {
    let doc = document.getElementsByClassName("soloitem")

    if (doc.length == 1) {
        document.getElementById("pswp__bg").style.opacity = "1";
        document.getElementById("pswpcontain").classList.add("pswp--open", "pswp--notouch", "pswp--css_animation", "pswp--svg", "pswp--zoom-allowed", "pswp--visible", "pswp--animated-in", "pswp--has_mouse");
        document.getElementById("uiopen").classList.add("pswp__ui--one-slide");
        document.getElementById("uiopen").classList.remove("pswp__ui--hidden");
    } else {
        document.getElementById("pswp__bg").style.opacity = "1";
        document.getElementById("pswpcontain").classList.add("pswp--open", "pswp--notouch", "pswp--css_animation", "pswp--svg", "pswp--zoom-allowed", "pswp--visible", "pswp--animated-in", "pswp--has_mouse");
        document.getElementById("uiopen").classList.add("pswp__ui--one-slide");
        document.getElementById("uiopen").classList.remove("pswp__ui--hidden");
        document.getElementById("pswparrL").classList.add("displaychange");
        document.getElementById("pswparrR").classList.add("displaychange");
    }

}

function datazoominv() {
    let doc = document.getElementsByClassName("soloitem")

    if (doc.length == 1) {
        document.getElementById("pswp__bg").style.opacity = "0";
        document.getElementById("pswpcontain").classList.remove("pswp--open", "pswp--notouch", "pswp--css_animation", "pswp--svg", "pswp--zoom-allowed", "pswp--visible", "pswp--animated-in", "pswp--has_mouse");
        document.getElementById("uiopen").classList.remove("pswp__ui--one-slide");
        document.getElementById("uiopen").classList.add("pswp__ui--hidden");
    } else {
        document.getElementById("pswp__bg").style.opacity = "0";
        document.getElementById("pswpcontain").classList.remove("pswp--open", "pswp--notouch", "pswp--css_animation", "pswp--svg", "pswp--zoom-allowed", "pswp--visible", "pswp--animated-in", "pswp--has_mouse");
        document.getElementById("uiopen").classList.remove("pswp__ui--one-slide");
        document.getElementById("uiopen").classList.add("pswp__ui--hidden");
        document.getElementById("pswparrL").classList.remove("displaychange");
        document.getElementById("pswparrR").classList.remove("displaychange");
    }

}

function previous() {
    let currentselect = document.getElementsByClassName("is-selected1")

    if (currentselect.length == 0) {
        document.getElementById("img1").classList.add("is-selected1");
        document.getElementById("flislider").style.transform = "translateX(0%)";
        document.getElementById("img2").classList.remove("is-selected");

    } else {
        document.getElementById("img2").classList.add("is-selected");
        document.getElementById("flislider").style.transform = "translateX(-100%)";
        document.getElementById("img1").classList.remove("is-selected1");
    }

}

function next() {
    let currentselect = document.getElementsByClassName("is-selected")

    if (currentselect.length == 0) {
        document.getElementById("img2").classList.add("is-selected");
        document.getElementById("flislider").style.transform = "translateX(-100%)";
        document.getElementById("img1").classList.remove("is-selected1");
    } else {
        document.getElementById("img1").classList.add("is-selected1");
        document.getElementById("flislider").style.transform = "translateX(0%)";
        document.getElementById("img2").classList.remove("is-selected");
    }

}


function CartOpen () {
    let currentcart = document.getElementsByClassName("is-open")
    let currentcart1 = document.getElementsByClassName("is-open1")
    const btn = document.getElementById("closebtn");

    btn.addEventListener("click", () => {
        document.getElementById("CartDrawer").classList.add("is-open1");
    })


    if (currentcart.length == 0) {
        document.getElementById("CartDrawer").classList.add("is-open");
    } else if (currentcart1.length == 1) {
        document.getElementById("CartDrawer").classList.remove("is-open", "is-open1");
    }


}

async function getProducts() {
    const response  = await axios.get('https://roger-roger-b38ef.ondigitalocean.app/products')
    //const response  = await axios.get('http://localhost:5000/products')
    console.log(response.data)
    products = response.data.products

    populateProducts()
}
getProducts()

function populateProducts () {
    const container = document.querySelector('.ProductGrid')

    const productsHtml = products.map((product, i) => {
        return (
            `
                  <article data-id="6732003180671"
  class="ProductGridItem PGI__title_cactus-jack-for-mastermind-skull-tee PGI__6732003180671 js-product-grid-item type-shirt 08-12-21 081321 9-12 WEEKS hover-show-second-image image-zoom shipping: ships in 9-12 WEEKS"
>
  <a href="/${product.url}" class="PGI__img_wrap js-grid-item-inner" tabindex="-1"

     data-hover-image="../products/02_02_updated_1500xbd36.jpg?v=1628872221"
    >


      <img src="${product.image}"
          height="2500" width="2500"
          class="PGI__img js-feat-img PGI__img_left" alt="${product.name}" loading="lazy">


  </a>
  <h3 class="PGI__title">
    <a
      href="/${product.url}"
      class="PGI__title-link js-title js-product-title"
    >${product.name}</a>
  </h3>
</article>
            `
        )
    })
    if (container) {
        container.innerHTML += productsHtml.toString().replaceAll(',','');
    }
}


// let products = [
//
//     {
//         name: 'Skull Tee',
//         tag: '02_01_updated_1500x3393',
//         price: 40,
//         size: 0,
//         inCart: 0
//     },
//     {
//         name: 'sock',
//         tag: '11_01_V3_1500xda83',
//         price: 14,
//         size: 'one size',
//         inCart: 0
//     },
//     {
//         name: 'Manifest Tee',
//         tag: '04_01_a8e324d3-8372-4261-b511-c10fd15bd8dd_1500xfeb4',
//         size: 0,
//         price: 48,
//         inCart: 0
//     },
//     {
//         name: 'sunrise Tee',
//         tag: '09_01_82eea021-15e3-4872-be9c-19a33feae4bb_1500xf953',
//         size: 0,
//         price: 48,
//         inCart: 0
//     },
//     {
//         name: 'create Tee',
//         tag: '08_01_9b000401-8888-4834-915e-808d09555ca4_1500xd4db',
//         size: 0,
//         price: 48,
//         inCart: 0
//     },    {
//         name: 'Mastermind Hat',
//         tag: '12_01_updatefinal_1500xd26d',
//         size: 'one size',
//         price: 20,
//         inCart: 0
//     },    {
//         name: 'Flame Tee',
//         tag: 'EXTRA_01_01_1500x121e',
//         size: 0,
//         price: 65,
//         inCart: 0
//     },    {
//         name: '3 pack socks',
//         tag: 'EXTRA_SOCKS_01_1500x6852',
//         size: 'one size',
//         price: 20,
//         inCart: 0
//     },
// ]



for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        if (document.getElementById('selectsize').innerHTML.indexOf("SIZE") !== -1) {
            throw new Error();
        }
        cartNumbers(products[i])
        TotalCost(products[i])
        DisplayCart()
    ;})
}

function getselectvalue1 () {
    var selectedValue = document.getElementById("_938qedafx").value;

    if (document.getElementById('selectsize').innerHTML.indexOf("SIZE") !== -1) {
        document.getElementById('selectsize').style.color="#bd0303";
        document.getElementById('c-error').style.display="block";
        document.getElementById('selectsizeicon').style.borderColor="#bd0303 transparent transparent";
        // document.getElementsByClassName("selectsize").style.color="#bd0303";

    } else {
        document.getElementById('selectsize').style.color="black";
        document.getElementById('c-error').style.display="none";
        document.getElementById('selectsizeicon').style.borderColor="black transparent transparent";
    }


}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('.datacount').textContent = productNumbers;
        document.querySelector('.datacount1').textContent = productNumbers;
    }
}

function cartNumbers (product, action){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if ( action ) {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.datacount').textContent = productNumbers - 1;
        document.querySelector('.datacount1').textContent = productNumbers - 1;
    } else if ( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.datacount').textContent = productNumbers + 1;
        document.querySelector('.datacount1').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.datacount').textContent = 1;
        document.querySelector('.datacount1').textContent = 1;
    }
    setItems(product);

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.name;
        if( cartItems[currentProduct] == undefined ) {
                cartItems = {
                    ...cartItems,
                    [currentProduct]: product
                }
                product.inCart = 0;
                let newsize = document.getElementById('_938qedafx').value;
                product.size = "("+ 1 +")"+ newsize;
                cartItems[currentProduct].inCart += 1;
                if (newsize == 0) {
                    product.size = 'one size'
                }

        } else {
            let newsize = document.getElementById('_938qedafx').value;
            cartItems[currentProduct].size += " " +"("+ 1 +")"+ newsize;
            cartItems[currentProduct].inCart += 1;
            if (newsize == 0) {
                cartItems[currentProduct].size = 'one size'
            }
        }


    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        };
        let newsize = document.getElementById('_938qedafx').value;
        let currentProduct = product.name;
        product.size = "("+ 1 +")"+ newsize;
        if (newsize == 0) {
            product.size = 'one size'
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


function TotalCost( product, action ) {
    let cart = localStorage.getItem("TotalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("TotalCost", cart - product.price);
    } else if(cart != null) {

        cart = parseInt(cart);
        localStorage.setItem("TotalCost", cart + product.price);

    } else {
        localStorage.setItem("TotalCost", product.price);
    }
}

function DisplayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    let cart = localStorage.getItem("TotalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector(".CD__table");

    if (cartItems == null) {
        window.location='/cart';

    }
    if (cartItems && productContainer) {
         productContainer.innerHTML = '';
         Object.values(cartItems).map(item => {
             productContainer.innerHTML += `
                <div class="CD__product-row">
                      <td class="CD__remove-cell">
                           <button
                               onclick='deleteButtons(this)'
                               type="button"
                               class="CD__remove"
                           >
                           <a>&times;</a>
                      </td>
                      <td class="CD__image-cell">
                          <a tabIndex="-1">
                              <img
                                  src="../products/${item.tag}.jpg"
                                  class="CD__image-img"
                                  loading="lazy"
                              />
                              
                          </a>
                      </td>
                       <td class="CD__title-cell">
                            <a class="CD__title" href="${item.url}">
                                ${item.name}
                            </a>
                       </td>
                       <td class="CD__title-cell">
                            <a class="CD__title" href="${item.url}">
                                ${item.size}
                            </a>
                       </td>
                       <td class="CD__title-cell1">
                            <a class="CD__title1" href="${item.url}">${item.name}</a>
                       </td>
                       <td class="CD__qty-cell" style="pointer-events: none">
                            <label for="updates_{{id}}" class="sr-only">
                                Quantity
                            </label>
                            <input
                                type="number"
                                class="js-qty-input CD__qty-input"
                                max="10"
                                min="0"
                                value="${item.inCart}"
                            />
                       </td>
                       <td class="CD__total-cell CD__total-content">
                            $${item.inCart * item.price}
                       </td>
                </div>
                
                `
         });

        productContainer.innerHTML += `
        <div class="CD__Actions">
          <div class="CA__buttons">
            <button type="submit" name="update" class="K__button CA__button-update sr-only">
              Update
              <span class="hide-on-mobile"> the Cart</span>
            </button>
            <div class="CA__subtotal">
              <span>Subtotal</span>
              $${cart}
            </div>
          </div>
          <button onclick="startCheckout();" id="startCheckout" class="ButtonCallout CA__button-checkout">
            Checkout
          </button>
        </div>
        `

        // manageQuantity();
    }
}

// function manageQuantity() {
//     let decreaseButtons = document.querySelectorAll('.decrease');
//     let increaseButtons = document.querySelectorAll('.increase');
//     let currentQuantity = 0;
//     let currentProduct = '';
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//
//     for(let i=0; i < increaseButtons.length; i++) {
//         decreaseButtons[i].addEventListener('click', () => {
//             console.log(cartItems);
//             currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);
//
//             if( cartItems[currentProduct].inCart > 1 ) {
//                 cartItems[currentProduct].inCart -= 1;
//                 cartNumbers(cartItems[currentProduct], "decrease");
//                 totalCost(cartItems[currentProduct], "decrease");
//                 localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//                 DisplayCart();
//             }
//         });
//
//         increaseButtons[i].addEventListener('click', () => {
//             console.log(cartItems);
//             currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
//             console.log(currentQuantity);
//             currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
//             console.log(currentProduct);
//
//             cartItems[currentProduct].inCart += 1;
//             cartNumbers(cartItems[currentProduct]);
//             totalCost(cartItems[currentProduct]);
//             localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//             DisplayCart();
//         });
//     }
// }
//

function clearCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    localStorage.clear();
    DisplayCart();
    onLoadCartNumbers();
}

function deleteButtons(event) {
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("TotalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        let btnClicked1 = event.parentElement.parentElement;
        let itemName = btnClicked1.getElementsByClassName("CD__title1")[0].innerText;

        localStorage.setItem('cartNumbers', productNumbers - cartItems[itemName].inCart);

        localStorage.setItem('TotalCost', cartCost - (cartItems[itemName].price * cartItems[itemName].inCart));


        delete cartItems[itemName];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        DisplayCart();
        onLoadCartNumbers();
    }

}

onLoadCartNumbers();