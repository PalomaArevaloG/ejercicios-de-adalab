"use strict";

const message = document.querySelector(".js-message");
const firstName = document.querySelector(".js-name");
const surname = document.querySelector(".js-surname");
let nameSurname = {};

function form() {
    message.innerHTML = firstName.value + " " + surname.value;
    nameSurname = {
        name: firstName.value,
        surname: surname.value,
    };

    localStorage.setItem("nameSurname", JSON.stringify(nameSurname));
}
firstName.addEventListener("keyup", form);
surname.addEventListener("keyup", form);

function recover() {
    const nameStore = JSON.parse(localStorage.getItem("nameSurname"));
    const firstNameStored = nameStore.firstName;
    const surnameStored = nameStore.surname;
    firstName.value = firstNameStored;
    surname.value = surnameStored;
    message.innerHTML = firstNameStored + " " + surnameStored;
}
recover();