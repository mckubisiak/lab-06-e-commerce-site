import { renderCart, getCartTotal } from './render-cart.js';
// import { cartItems } from '../data/cart-items.js';
import { getCart } from '../local-storage-utils.js';
import { reload } from '../utils.js';
import marbles from '../data/marbles.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
const orderButton = document.getElementById('order-button');
//we removed the cartItems import and set it to our getCart function for local storage
const cartItems = getCart();

for (let item of cartItems) {
    const tableRow = renderCart(item);


    anchor.append(tableRow);
}

const cartTotal = getCartTotal();

total.textContent = `€ ${cartTotal}`;



orderButton.addEventListener('click', () => {

    alert(` your order has been place: ${JSON.stringify(cartItems)}`);
    console.log(cartItems);
    console.log(typeof cartItems);
    localStorage.clear();
    location.reload();
    
    return;
});