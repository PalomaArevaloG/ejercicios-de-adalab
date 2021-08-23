"use strict";
let dogAge = 1;
let newDogAge = (dogAge - 2) * 5;
if (dogAge === 1) {
    console.log("Tu perro tiene 15 años humanos");
} else if (dogAge === 2) {
    console.log(`Tu perro tiene ${15 + 9} años humanos`);
} else {
    console.log(`Tu perro tiene ${15 + 9 + newDogAge}`);
}