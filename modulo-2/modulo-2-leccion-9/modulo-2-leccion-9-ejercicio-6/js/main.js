"use strict";

function christmasTree() {
    let acc = "";
    console.log("★"); // en la misma funcion para que vaya den orden
    for (let i = 1; i <= 5; i++) {
        acc += "▲";
        console.log(acc);
    }
    console.log("|"); // en la misma funcion para que vaya den orden
}

christmasTree();