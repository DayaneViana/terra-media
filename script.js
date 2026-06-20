const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
});

const elementosEscondidos = document.querySelectorAll('.escondido');

elementosEscondidos.forEach((elemento) => {
    observer.observe(elemento);
});