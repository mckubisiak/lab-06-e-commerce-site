export function renderMarble(marble) {
    const li = document.createElement('li');
    li.className = marble.category;
    li.title = marble.description;

    const h3 = document.createElement('h3');
    h3.textContent = marble.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + marble.image;
    img.alt = marble.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const xtracred = marble.price + '€';
    
    p.textContent = xtracred;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = marble.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

