"use strict";

function getEl(selector) {
    const jsConst = document.querySelector(selector);
    if (!jsConst) {
        console.error(
            `No existe ningún elemento con clase, id o tag llamado ${selector}`
        );
    }
    return jsConst;
}

const number = getEl(".paragraph");
console.log(`El número es ${number.innerHTML}`);
let newNumber = parseInt(number.innerHTML);

function par(newNumber) {
    return newNumber;
}

if (newNumber % 2 === 0) {
    console.log(`${newNumber} es par`);
} else {
    console.log(`${newNumber} es impar`);
}