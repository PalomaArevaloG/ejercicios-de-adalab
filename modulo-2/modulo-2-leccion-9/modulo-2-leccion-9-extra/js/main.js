"use strict";
const promos = [{
        promo: "A",
        name: "Ada",
        students: [{
                id: "id-1",
                name: "Sofía",
                age: 20,
            },
            {
                id: "id-2",
                name: "María",
                age: 21,
            },
            {
                id: "id-3",
                name: "Lucía",
                age: 22,
            },
        ],
    },
    {
        promo: "B",
        name: "Borg",
        students: [{
                id: "id-4",
                name: "Julia",
                age: 23,
            },
            {
                id: "id-5",
                name: "Tania",
                age: 24,
            },
            {
                id: "id-6",
                name: "Alaia",
                age: 25,
            },
        ],
    },
    {
        promo: "C",
        name: "Clarke",
        students: [{
                id: "id-7",
                name: "Lidia",
                age: 26,
            },
            {
                id: "id-8",
                name: "Celia",
                age: 27,
            },
            {
                id: "id-9",
                name: "Nadia",
                age: 28,
            },
        ],
    },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];
const result = document.querySelector(".js-result");
// 1.Pintar en pantalla los nombres de las promos

/*for (const lista of promos) {
    const html = `<ul>
    <li>${lista.name}</li>
    
  </ul>`;
    result.innerHTML += html;
}

//2 Pintar en pantalla las letras de las promos y los nombres de las promos

for (const lista of promos) {
    const html = `<ul>
    <li>
    <p>Nombre: ${lista.name}</p>
    <p> Promo: ${lista.promo}</p>
    </li>
    
  </ul>`;
    result.innerHTML += html;
}
//3 Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas
for (const lista of promos) {
    const html = `<ul>
    <li>
    <p>Nombre: ${lista.name}</p>
    <p> Promo: ${lista.promo}</p>
    <p> Numero de alumnas: ${lista.students.length}</p>
    </li>
    
  </ul>`;
    result.innerHTML += html;
}
*/
//4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas

//pendiente
const estudiantes = promos.students;
console.log(estudiantes);

for (const lista of promos) {
    const html = `<ul>
    <li>
    <p>Nombre: ${lista.name}</p>
    <ul>
    <li>
    ${name} , ${age}
    </li>
    </ul>
    </li>
    </ul>`;

    let name;
    let age;
    for (let i = 0; i < lista.students.length; i++) {
        let arrayData = lista.students;

        name = arrayData[i].name;
        age = arrayData[i].age;

        html += `    
        <li>
            ${name} , ${age}
        </li>`;

        // name = nameArray[i];
        // age = nameArray[i];
    }
    // console.log(name);
    // console.log(age);

    // for (const nameArray of lista.students) {
    //     // name = nameArray.name;
    //     // age = nameArray.age;
    // }
    result.innerHTML += html;
}