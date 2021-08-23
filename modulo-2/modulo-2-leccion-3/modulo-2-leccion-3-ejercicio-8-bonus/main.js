"use strict";
const year = 2021;
// const yearResto = year % 4;

// switch (yearResto) {
//     case 0:
//         console.log("Es bisiesto");
//         break;
//     case 1:
//         console.log(`El próximo bisiesto será ${year + 3}`);
//         break;
//     case 2:
//         console.log(`El próximo bisiesto será ${year + 2}`);
//         break;
//     case 3:
//         console.log(`El próximo bisiesto será ${year + 1}`);
//         break;
// }
if (year % 4 === 0) {
    console.log("Es año bisiesto");
} else if (year % 4 === 1) {
    console.log(`El próximo bisiesto será ${year + 3}`);
} else if (year % 4 === 1) {
    console.log(`El próximo año bisiesto será, ${year + 3}`);
} else if (year % 4 === 2) {
    console.log(`El próximo año bisiesto será, ${year + 2}`);
} else if (year % 4 === 3) {
    console.log(`El próximo año bisiesto será, ${year + 1}`);
}