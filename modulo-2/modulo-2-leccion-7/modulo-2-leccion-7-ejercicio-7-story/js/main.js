"use strict";

// Lista  (array con objetos dentro)
const adalabers = [{
        name: "María",
        age: 29,
        profession: "diseñadora",
    },
    {
        name: "Lucía",
        age: 21,
        profession: "ingeniera",
    },
    {
        name: "Susana",
        age: 34,
        profession: "periodista",
    },
    {
        name: "Rocío",
        age: 25,
        profession: "actriz",
    },
    {
        name: "Inma",
        age: 21,
        profession: "diseñadora",
    },
];
//Una función countAdalabers que devuelve el número de adalabers en el listado
function countAdalabers(adalabers) {
    console.log(`Tenemos ` + adalabers.length + ` adalabers`); //5
}
countAdalabers(adalabers);

//Una función averageAge que devuelve la media de edad de listado.
function averageAge(adalabers) {
    let totalAge = 0;
    for (let i = 0; i < adalabers.length; i++) {
        totalAge += adalabers[i].age;
    }
    let media = totalAge / adalabers.length;
    console.log("La media de edad es ", media); //28
}
averageAge(adalabers);

//Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest(adalabers) {
    let ageAdalabers = [];
    for (let i = 0; i < adalabers.length; i++) {
        ageAdalabers[i] = adalabers[i].age;
    }
    let result = Math.min.apply(null, ageAdalabers);
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].age === result) {
            console.log(`La más joven es ${adalabers[i].name}`); // Inma
        }
    }
}
theYoungest(adalabers);
//Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
function countDesignerst(adalabers) {
    let acc = 0;
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].profession === "diseñadora") {
            acc += 1;
        }
    }
    console.log(`Hay ${acc} diseñadoras`); // 2
}

countDesignerst(adalabers);