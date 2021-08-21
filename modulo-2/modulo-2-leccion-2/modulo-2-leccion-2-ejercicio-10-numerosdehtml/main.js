"use strict";
const daysYear = 365;
const hoursDay = 24;
const userAge = document.querySelector(".js_age");
console.log(userAge.innerHTML);
const hoursLived = daysYear * hoursDay * parseInt(userAge.innerHTML);
console.log(`Has vivido ${hoursLived} horas`);