"use strict";
const cesta = {
    initialValue: 1,
    currentValue: 2,
    maxValue: 20,
    minValue: 0,
};

cesta.addPera = (currentValue) => {
    currentValue = currentValue + 1;
    return currentValue;
};

cesta.takePera = (currentValue) => {
    currentValue = currentValue - 1;
    return currentValue;
};

cesta.resetPera = (currentValue, initialValue) => {
    currentValue = initialValue;
    return currentValue;
};

let perasNow = cesta.addPera(cesta.currentValue);
console.log(`Añado 1 y tengo ${perasNow}`); //3
perasNow = cesta.takePera(cesta.currentValue);
console.log(`Quito 1 y tengo ${perasNow}`); //1
perasNow = cesta.resetPera(cesta.currentValue, cesta.initialValue);
console.log(`Valor inicial ${perasNow}`); //0