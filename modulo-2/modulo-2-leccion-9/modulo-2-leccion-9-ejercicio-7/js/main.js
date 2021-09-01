"use strict";

function christmasTree() {
    debugger;

    let triangle = "▲";
    let spaces = " ";
    console.log("    ★"); // en la misma funcion para que vaya den orden
    for (
        let numTriangles = 1, numSpaces = 4; numTriangles <= 9; numTriangles += 2, numSpaces--
    ) {
        let moreSpaces = spaces.repeat(numSpaces);
        let moreTriangles = triangle.repeat(numTriangles);
        console.log(moreSpaces + moreTriangles);
    }
    console.log("    |"); // en la misma funcion para que vaya den orden
}

christmasTree();