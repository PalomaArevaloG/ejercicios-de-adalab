'use strict';

/* Sección de elementos que usamos en el HTML */

const menuDropdown = document.querySelector('.js_menu_dropdown');
const sectionAdd = document.querySelector('.js_section_add');
const listData = document.querySelector('.js_list_data');

/* Sección de variables globales (que usamos en todo el fichero) */

// Día 2: Variables para el primer bookmark:

const bmk_1_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc   = 'JS en los materiales de Adalab';
const bmk_1_seen   = 'checked title="Enlace leído"';
const bmk_1_tags_1 = 'javascript';
const bmk_1_tags_2 = '';

// Nota: Uso _ en los nombres, pero por una razón académica
// En JS se suele usar la notación camelCase para los identificadores
// (identificador = nombre de variable)

// Día 2: Añadir el primer bookmark

let html = `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${bmk_1_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_1_url}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${bmk_1_desc}</p>
      <ul class="item__tags">`;

// Día 3: Sí hay etiqueta 1 con texto, se genera el HTML de la etiqueta 1
// y se añade al código HTML del enlace:

if( bmk_1_tags_1 !== '' ) {
  html += `
      <li class="item__tag">${bmk_1_tags_1}</li>`;
}

// Se hace el mismo proceso para la etiqueta 2:

if( bmk_1_tags_2 !== '' ) {
  html += `
      <li class="item__tag">${bmk_1_tags_2}</li>`;
}

html += `
      </ul>
    </article>
  </li>
  `;

// Día 2: Vamos con el segundo bookmark:

const bmk_2_url    = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_seen   = 'checked title="Enlace leído"';
const bmk_2_tags_1 = '';
const bmk_2_tags_2 = '';

html += `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${bmk_2_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_2_url}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${bmk_2_seen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${bmk_2_desc}</p>`;

// Día 3: (2ª forma) Sí hay etiquetas, tanto en la etiqueta 1 o en la etiqueta 2 (o ambas), 
// se va a poner un <ul> en el HTML y se comprobará qué etiquetas hay

if( bmk_2_tags_1 !== '' || bmk_2_tags_2 !== '' ) {
  html += `
      <ul class="item__tags">`;

  // Sí hay etiqueta 1, se genera su HTML y se añade al código HTML del enlace:

  if( bmk_2_tags_1 !== '' ) {
    html += `
        <li class="item__tag">${bmk_2_tags_1}</li>`;
  }

  // Se hace el mismo proceso para la etiqueta 2:

  if( bmk_2_tags_2 !== '' ) {
    html += `
        <li class="item__tag">${bmk_2_tags_2}</li>`;
  }

  // Se cierra el tag <ul> que se abrió al principio del if:
  
  html += `
      <ul>`;
}

  html += `
    </article>
  </li>
  `;

// Día 2: Tercer bookmark (y tantos como quieras):

const bmk_3_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_seen   = 'title="Por leer"';
const bmk_3_tags_1 = 'html';
const bmk_3_tags_2 = 'css';

// Día 3: (3ª forma) Mostrar las etiquetas opcionalmente

// Se crea una variable htmlTags para ir añadiendo los li de las etiquetas a mostrar.

let htmlTags = '';

// Si existe la etiqueta 1 (es distinta a vacía) se crea un HTML con un <li>
// que contenga la etiqueta 1:

if( bmk_3_tags_1 ) {
  htmlTags += `<li class="item__tag">${bmk_3_tags_1}</li>`;
}

// Si existe la etiqueta 2 (es distinta a vacía) se crea un HTML con un <li>
// que contenga la etiqueta 2 (que añadimos al HTML anterior):

if( bmk_3_tags_2 ) {
  htmlTags += `<li class="item__tag">${bmk_3_tags_2}</li>`;
}

// Si en los pasos anteriores se ha creado algún HTML para una de las etiquetas
// se crea un <ul> para envolverlas:

if( htmlTags ) {
  htmlTags = `<ul class="item__tags">${htmlTags}</ul>`;
}

// Ahora se inserta el html de las etiquetas en el espacio correspondiente
// del HTML del enlace:

html += `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${bmk_3_url}" target="_blank" rel="noopener noreferrer">
          ${bmk_3_url}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${bmk_3_desc}</p>
      ${htmlTags}
    </article>
  </li>
  `;

listData.innerHTML = html;


// Día 3: Mostrar vista de tarjetas

const boardData = document.querySelector('.js_boarddata');

if( boardData.classList.contains('tableview') ) {
  // Tiene la clase tableview
  boardData.classList.remove('tableview');
  boardData.classList.add('listview');
}
else if( boardData.classList.contains('listview') ) {
  // Tiene la clase listview
  boardData.classList.remove('listview');
  boardData.classList.add('tableview');
}


/*
// Día 1: Probando a mostrar el desplegable del menú hamburguesa

menuDropdown.classList.remove('collapsed');

// Día 1: Probando a mostrar el formulario de añadir nuevo enlace

sectionAdd.classList.remove('hidden');
*/