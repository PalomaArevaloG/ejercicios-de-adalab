"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const testing = pins.filter((item) => item % 2 === 0);

console.log(testing);