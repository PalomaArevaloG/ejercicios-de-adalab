"use strict";

const items = [
    "Ada",
    1815, ["Informática", "Matemática", "Escritora"],
    {
        mother: "Anna Isabella",
        father: "Lord Byron",
    },
];

function info() {
    for (let i = 0; i < items.length; i++) {
        let dato = items[i];
        let position = i;
        let type = typeof items[i];
        let parents = items[3];
        if (position === 3) {
            for (const property in parents)
                console.log(
                    `El dato ${property} está en la posición ${position} y es de tipo ${type}`
                );
        } else {
            console.log(
                `El dato ${dato} está en la posición ${position} y es de tipo ${type}`
            );
        }
    }
}
info();