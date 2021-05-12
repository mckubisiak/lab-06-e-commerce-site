import { findById } from '../utils.js';

const CART = 'CART';


export function getCart() {

    // this gets the string from local storage

    const stringyCart = localStorage.getItem('CART');

    const parsedCart = JSON.parse(stringyCart);

    if (parsedCart) {

        return parsedCart;
    }

    else {
        return [];
    }
}

// this sets the cart to localstorage

export function setCart(someCart) {

    const cartString = JSON.stringify(someCart);

    localStorage.setItem(CART, cartString);
}


// this adds +1 to the quanitiy by looking for the id in the cart already and 
//increasing it by 1; or if there is not matching id it will add the item to 
//cart ARRAY
export function addToCart(productId) {
    const cart = getCart();

    const cartItem = findById(cart, productId);

    if (cartItem) {
        cartItem.quantity++;
    }

    else {
        const addItem = {
            id: productId,
            quantity: 1,
        };
        cart.push(addItem);
    }

    setCart(cart);
}

