"use strict";

let currentYear = 2017;
let moons = [];
for (let i = 0; i < 15; i++) {
    currentYear += 3;
    moons[i] = currentYear;
}
console.log(`Las siguientes lunas serán en : ${moons}`);