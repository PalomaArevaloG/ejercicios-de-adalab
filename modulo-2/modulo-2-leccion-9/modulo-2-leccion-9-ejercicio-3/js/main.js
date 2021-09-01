"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber(lostEl) {
    let pairLostNumbers = [];
    let tripleLostNumbers = [];
    let newNumbers = [];
    for (const number of lostEl) {
        if (number % 2 === 0) {
            pairLostNumbers.push(number);
        }

        if (number % 3 === 0) {
            tripleLostNumbers.push(number);
        }
    }

    newNumbers = pairLostNumbers.concat(tripleLostNumbers);
    console.log(pairLostNumbers);
    console.log(tripleLostNumbers);
    console.log(newNumbers);
}

bestLostNomber(lostNumbers);