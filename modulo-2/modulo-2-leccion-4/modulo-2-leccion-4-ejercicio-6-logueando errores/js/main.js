"use strict";
const btnEl = getEl(".btn");

function getEl(selector) {
    const jsConst = document.querySelector(selector);
    if (!jsConst /*o tambien jsConst===null*/ ) {
        console.error(
            `No existe ningún elemento con clase, id o tag llamado ${selector}`
        );
    }
    return jsConst;
}
const btn = getEl("btn");
console.log(btn);
const otro2 = getEl(".otro");
console.log(otro2);