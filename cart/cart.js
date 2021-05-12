import { renderCart, getCartTotal } from './render-cart.js';
import { cartItems } from '../data/cart-items.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCart(item);

    anchor.append(tableRow);
}

const cartTotal = getCartTotal();

total.textContent = cartTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});


