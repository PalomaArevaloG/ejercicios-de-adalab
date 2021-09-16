"use strict";

//pendiente
const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

let premium = [];
let noPremium = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isPremium === true) {
        premium = users.map(
            (item) => `Bienvenida ${item}. Gracias por confiar en nosotros.`
        );
    } else {
        noPremium = users.map((item) => `Bienvenida ${item}`);
    }
}
console.log(premium);

console.log(noPremium);