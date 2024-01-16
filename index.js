const data = [
    {
         id: "1",
         name: "BMW",
         price: 35000,
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam."
    },
    {
         id: "2",
         name: "Mercedes",
         price: 40000,
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam."
    },
    {
         id: "3",
         name: "Tesla",
         price: 22000,
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam."
    },
];


let card = document.getElementById('box');

const title = document.getElementById('title');
let image = document.getElementById('image')

let img = document.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200/200');
image.appendChild(img);

let h2 = document.createElement('h2');
h2.innerHTML = 'BMW';

let h3 = document.createElement('h3');
h3.innerHTML = '35000'

let p = document.createElement('p');
p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.'

title.appendChild(h2);
title.appendChild(h3);
title.appendChild(p);

const btn = document.querySelector('.btn');


btn.addEventListener('click', function() {
    let isDelete = confirm('Are you sure?');
    
    if (isDelete) {
        card.remove();
    }
});


    // //
