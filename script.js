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

const anelGigante = document.querySelector('.anel-gigante');

window.addEventListener('scroll', () => {
    // Só executa o efeito se o anel existir na página atual
    if (anelGigante) {
        let rolagem = window.scrollY;
        anelGigante.style.transform = `translateY(${rolagem * 0.15}px) rotate(${rolagem * 0.05}deg)`;
    }
});