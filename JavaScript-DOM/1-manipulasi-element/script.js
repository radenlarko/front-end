// MANIPULASI ELEMENT

// Method innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Yos Sularko</em>';

// Method style.(property CSS)
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// Method setAttribute getAttribute removeAttribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'yos');

// Method classList add,remove,toggle,item,contains,replace
// const p2 = document.getElementsByClassName('p2')[0];
// p2.classList.add('label');


// MANIPULASI NODE

// Buat elemen baru
const pBaru = document.createElement('p');
const textBaru = document.createTextNode('paragraf baru');

// simpan tulisan
pBaru.appendChild(textBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

// menandai yg sudah di manipulasi
pBaru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';