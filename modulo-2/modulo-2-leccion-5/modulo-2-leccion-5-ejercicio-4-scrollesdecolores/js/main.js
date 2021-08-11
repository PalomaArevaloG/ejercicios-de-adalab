// elemento de HTML
const fondo = document.querySelector('.lorem');
const ventana = document.defaultView;
// handler
function colorScroll() {
    if (fondo.scrollY >= 250) {
        console.log(`son mas de 250px`);
        if (fondo.classList.contains('azul')) {
            fondo.classList.remove('azul');
            fondo.classList.add('violeta');
        }
    } else {
        console.log(`aun no son 250px`);
        if (fondo.classList.contains('violeta')) {
            fondo.classList.remove('violeta');
            fondo.classList.add('azul');
        }

    }
}

// listener sobre el elemento, con tipo de evento y handler
ventana.addEventListener('scroll', colorScroll);