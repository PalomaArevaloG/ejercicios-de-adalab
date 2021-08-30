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
const bmk_1_tags_2 = 'html';

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
      <ul class="item__tags">
        <li class="item__tag">${bmk_1_tags_1}</li>
        <li class="item__tag">${bmk_1_tags_2}</li>
      </ul>
    </article>
  </li>
  `;

// Día 2: Vamos con el segundo bookmark:

const bmk_2_url    = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc   = 'Ideas de proyectos JS';
const bmk_2_seen   = 'checked title="Enlace leído"';
const bmk_2_tags_1 = 'javascript';
const bmk_2_tags_2 = 'portfolio';

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
      <p class="item__desc">${bmk_2_desc}</p>
      <ul class="item__tags">
        <li class="item__tag">${bmk_2_tags_1}</li>
        <li class="item__tag">${bmk_2_tags_2}</li>
      </ul>
    </article>
  </li>
  `;

// Día 2: Tercer bookmark (y tantos como quieras):

const bmk_3_url    = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc   = 'HTML en los materiales de Adalab';
const bmk_3_seen   = 'title="Por leer"';
const bmk_3_tags_1 = 'html';
const bmk_3_tags_2 = 'css';

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
      <ul class="item__tags">
        <li class="item__tag">${bmk_3_tags_1}</li>
        <li class="item__tag">${bmk_3_tags_2}</li>
      </ul>
    </article>
  </li>
  `;

listData.innerHTML = html;

/*
// Día 1: Probando a mostrar el desplegable del menú hamburguesa

menuDropdown.classList.remove('collapsed');

// Día 1: Probando a mostrar el formulario de añadir nuevo enlace

sectionAdd.classList.remove('hidden');
*/