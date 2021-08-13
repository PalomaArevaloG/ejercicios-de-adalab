"use strict";

const numbers = [4, 2, 7, 8, 6];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}
let media = acc / 5;
console.log("La media final es " + media); //5.4
debugger;
numbers[1] = 3;

//media = acc / 6;
//console.log("La media final nueva es " + media); //4.5-----debería dar 5