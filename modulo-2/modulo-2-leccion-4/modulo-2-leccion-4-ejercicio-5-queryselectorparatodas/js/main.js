'use strict';
const btnEl = getEl(".btn");

function getEl(selector) {
    const jsConst = document.querySelector(selector);
    return jsConst;
}
const btn = getEl('.btn');
console.log(btn);
const otro2 = getEl('.otro');
console.log(otro2);