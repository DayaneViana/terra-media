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

const imagemBanner = document.querySelector('.banner');
const tituloHeader = document.querySelector('header h1');

window.addEventListener('scroll', () => {
    if (imagemBanner) {
        let rolagem = window.scrollY;
        imagemBanner.style.transform = `translateY(${rolagem * 0.6}px)`;
        
        if (tituloHeader) {
            tituloHeader.style.transform = `translateY(${rolagem * 0.6}px)`;
            tituloHeader.style.opacity = 1 - (rolagem * 0.003);
        }
    }
});