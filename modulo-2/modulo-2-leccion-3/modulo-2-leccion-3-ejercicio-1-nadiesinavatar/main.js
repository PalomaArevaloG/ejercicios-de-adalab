"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";
//paso1
const img = document.querySelector(".user__avatar");
img.src = userAvatar;
//paso 2
let userAvatar = "";
//paso 3
img.src = userAvatar || DEFAULT_AVATAR;