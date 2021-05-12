import { renderCart, getCartTotal } from './render-cart.js';
// import { cartItems } from '../data/cart-items.js';
import { getCart } from '../local-storage-utils.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

//we removed the cartItems import and set it to our getCart function for local storage
const cartItems = getCart();

for (let item of cartItems) {
    const tableRow = renderCart(item);

    anchor.append(tableRow);
}

const cartTotal = getCartTotal();

total.textContent = `€ ${cartTotal}`;


