const menu = document.querySelector('.menu'); // Seleciona o menu
const NavMenu = document.querySelector('.nav-menu'); // Seleciona o menu de navegação

menu.addEventListener('click', () => { // Adiciona um evento de clique no menu
    menu.classList.toggle('ativo'); // Adiciona ou remove a classe ativo no menu
    NavMenu.classList.toggle('ativo'); // Adiciona ou remove a classe ativo no menu de navegação
})

let indexAtual = 0; // Índice do slide atual
let intervaloSlides;  // Intervalo de tempo entre os slides

function moverSlide(direcao) { // Função para mover o slide
    const slides = document.querySelectorAll('.carrossel-item'); // Seleciona todos os slides
    const totalSlides = slides.length; // Total de slides

    slides[indexAtual].classList.remove('active'); // Remove a classe active do slide atual

    indexAtual = (indexAtual + direcao + totalSlides) % totalSlides; // Calcula o índice do próximo slide

    document.querySelector('.carrossel-inner').style.transform = `translateX(-${indexAtual * 100}%)`; // Move o slide

    slides[indexAtual].classList.add('active'); // Adiciona a classe active ao próximo slide
}

function carrosselInicio() { // Função para iniciar o carrossel
    intervaloSlides = setInterval(() => {
        moverSlide(1);
    }, 3000);
}

function carrosselPara() { // Função para parar o carrossel
    clearInterval(intervaloSlides); 
}

window.onload = carrosselInicio; // Inicia o carrossel ao carregar a página

document.querySelector('.carrossel').addEventListener('mouseover', carrosselPara); // Adiciona um evento de mouseover no carrossel

document.querySelector('.carrossel').addEventListener('mouseout', carrosselInicio); // Adiciona um evento de mouseout no carrossel

window.addEventListener('load', () => { 
    document.querySelector('.navegação').style.opacity = 1; 
  });
window.addEventListener('load', () => {
    document.querySelector('.inicio-titulo').style.opacity = 1;
  });
window.addEventListener('load', () => {
    document.querySelector('.inicio-parag').style.opacity = 1;
  });

  function onScroll() { // Função para animar os elementos ao rolar a página
    const elementos = document.querySelectorAll("*");
    const windowHeight = window.innerHeight;  

    elementos.forEach(elemento => {
      const elementoTopo = elemento.getBoundingClientRect().top; // Obtém a posição do elemento em relação ao topo da janela

      if (elementoTopo < windowHeight - 50) { // Verifica se o elemento está visível
        elemento.classList.add('visible'); // Adiciona a classe visible ao elemento
      }
    });
  }

  window.addEventListener('scroll', onScroll); // Adiciona um evento de scroll na janela
  window.addEventListener('load', onScroll); // Adiciona um evento de load na janela