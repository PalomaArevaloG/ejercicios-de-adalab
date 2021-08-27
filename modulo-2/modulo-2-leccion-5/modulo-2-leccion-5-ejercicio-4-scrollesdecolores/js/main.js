// elemento de HTML
const fondo = document.querySelector(".lorem");
//queremos poner a la ventana elevento
const ventana = document.defaultView;
// handler

function colorScroll() {
    if (window.scrollY) {
        console.log(`mas de 250px`);
        if (fondo.classList.contains("azul")) {
            fondo.classList.remove("azul");
            fondo.classList.add("violeta");
        }
    } else {
        console.log(`menos de 250px`);
        if (fondo.classList.contains("violeta")) {
            fondo.classList.remove("violeta");
            fondo.classList.add("azul");
        }
    }
}

// listener sobre el elemento, con tipo de evento y handler
ventana.addEventListener("scroll", colorScroll);