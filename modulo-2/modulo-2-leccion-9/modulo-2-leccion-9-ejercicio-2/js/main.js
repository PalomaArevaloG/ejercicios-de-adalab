"use strict";

function get100Numbers() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    return array;
}

function getReversed100Numbers() {
    let array = get100Numbers();
    array = array.reverse();
    console.log(array);
}

getReversed100Numbers();