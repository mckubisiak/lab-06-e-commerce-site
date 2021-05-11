import marbles from '../data/marbles.js';
import { renderMarble } from './render-marbles.js';

const unorderedListElement = document.getElementById('marbles');

for (let i = 0; i < marbles.length; i++) {
    const marble = marbles[i];
    const el = renderMarble(marble);
    unorderedListElement.appendChild(el);
}