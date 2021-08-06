'use strict'
const firstDogImage = '<img src = "https: //images.dog.ceo/breeds/schipperke/n02104365_8156.jpg">';

const firstDogName = 'Dina';

const secondDogImage = '<img src= "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg">';
const secondDogName = 'Luna';

const thirdDogImage = "<img src='https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg'>";
const thirdDogName = 'Lana';

const first = `My name is ${firstDogName} ${firstDogImage}">`;
const second = `My name is ${secondDogName} ${secondDogImage}`;
const third = `My name is ${thirdDogName} ${thirdDogImage}`;


const htmlToShow = `<li>
  ${first}
  </li><li>
  ${second} 
  </li><li>
  ${third}
</li>`;


const mainContent = document.querySelector('.list');
mainContent.innerHTML = htmlToShow;