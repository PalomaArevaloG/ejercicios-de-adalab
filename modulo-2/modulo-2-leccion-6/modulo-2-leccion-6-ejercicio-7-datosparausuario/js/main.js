'use strict'

const job = {
    developer: {
        firstName: 'paloma',
        lastName: 'arevalo',
        age: 39,
        //job: job,
    }
};

//Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
console.log(developer.firstName);
console.log(developer.lastName);
console.log(developer.age);
//console.log(developer.job);
debugger;
//Cambiaremos el nombre del usuario por otro distinto
developer.name = "Elena";
//Aumentaremos en 1 la edad del usuario
developer.age = developer.age++;
//Comprobaremos de nuevo que todo sigue funcionando correctamente
console.log(developer.firstName);
console.log(developer.lastName);
console.log(developer.age);
//console.log(developer.job);