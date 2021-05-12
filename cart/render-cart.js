import marbles from '../data/marbles.js';
import { findById } from '../utils.js';
//import { cartItems } from '../data/cart-items.js';
//removed cartitems static list for getcart local storage 
import { getCart } from '../local-storage-utils.js';

const cartItems = getCart();

export function renderCart(item) {

    const marble = findById(marbles, item.id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
    
    nameTd.textContent = marble.name;
    quantityTd.textContent = item.quantity;
    priceTd.textContent = marble.price;
    
    const total = marble.price * item.quantity;

    totalTd.textContent = total;

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}    




export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartItems) {

        const marble = findById(marbles, item.id);

        const total = item.quantity * marble.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}