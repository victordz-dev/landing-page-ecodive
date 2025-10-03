// --- LÓGICA DO MENU HAMBÚRGUER ---
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

if (menu && NavMenu) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    });
}

// --- LÓGICA DO CARROSSEL ---
let indexAtual = 0;
let intervaloSlides;

function moverSlide(direcao) {
    const slides = document.querySelectorAll('.carrossel-item');
    const totalSlides = slides.length;
    const carrosselInner = document.querySelector('.carrossel-inner');

    if (totalSlides === 0 || !carrosselInner) return; // Evita erros

    // A classe 'active' não é necessária para o efeito de slide, mas mantemos
    slides[indexAtual].classList.remove('active');

    indexAtual = (indexAtual + direcao + totalSlides) % totalSlides;

    carrosselInner.style.transform = `translateX(-${indexAtual * 100}%)`;

    slides[indexAtual].classList.add('active');
}

function carrosselInicio() {
    clearInterval(intervaloSlides); // Garante que não haja múltiplos intervalos
    intervaloSlides = setInterval(() => moverSlide(1), 3000);
}

function carrosselPara() {
    clearInterval(intervaloSlides);
}

// Eventos de mouse e botões para o carrossel
const carrossel = document.querySelector('.carrossel');
if (carrossel) {
    carrossel.addEventListener('mouseover', carrosselPara);
    carrossel.addEventListener('mouseout', carrosselInicio);

    const botaoAnterior = document.querySelector('.carrossel-btn.prev');
    const botaoProximo = document.querySelector('.carrossel-btn.next');

    if (botaoAnterior && botaoProximo) {
        botaoAnterior.addEventListener('click', () => moverSlide(-1));
        botaoProximo.addEventListener('click', () => moverSlide(1));
    }
}

// --- ANIMAÇÕES DE SCROLL (USANDO INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // A animação dispara quando 10% do elemento estiver visível
});

const elementosAnimar = document.querySelectorAll('.animar-ao-rolar');
elementosAnimar.forEach(el => observer.observe(el));


// --- EVENTOS DE CARREGAMENTO DA PÁGINA ---
window.addEventListener('load', () => {
    // Animações de fade-in iniciais
    const navegacao = document.querySelector('.navegação');
    const titulo = document.querySelector('.inicio-titulo');
    const parag = document.querySelector('.inicio-parag');

    if (navegacao) navegacao.style.opacity = 1;
    if (titulo) titulo.style.opacity = 1;
    if (parag) parag.style.opacity = 1;

    // Inicia o carrossel de imagens
    if (carrossel) {
        carrosselInicio();
    }
});