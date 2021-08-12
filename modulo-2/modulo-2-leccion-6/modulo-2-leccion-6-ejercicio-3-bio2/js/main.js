"use strict";
const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";

adalaber1.showBio = function() {
    return (
        "Me llamo " +
        this.name +
        ",tengo " +
        this.age +
        " años y soy " +
        this.profession +
        "."
    );
};

console.log(adalaber1.showBio());

const adalaber2 = {
    name: "Rocío",
    age: 25,
    profession: "actriz",
};
adalaber2.showBio = function() {
    return (
        "Me llamo " +
        this.name +
        ", tengo " +
        this.age +
        " años y soy " +
        this.profession
    );
};

console.log(adalaber2.showBio());