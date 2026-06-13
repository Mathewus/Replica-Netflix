
const cabecalho = document.querySelector(".cabecalho");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 10) {

        cabecalho.classList.add("active");

        // console.log(window.pageYOffset);

    } else {

        cabecalho.classList.remove("active");
    }
})

// ==========================================
// VARIÁVEIS GLOBAIS (O que o resize precisa acessar)
// ==========================================
let counter = 0; // Contador
let carrosseisAtivos = {}; // Guarda a referência dos elementos de cada carrossel clicado
// let largurasCarrossel = {}; // Guarda a largura calculada de cada carrossel clicado

// Função para passar slides
let arrowsPrev = document.querySelectorAll(".arrow-prev");
let arrowsNext = document.querySelectorAll(".arrow-next");

arrowsPrev.forEach((prev) => {
    prev.addEventListener("click", () => {

        counter = counter += -1;

        let idCatalogo = prev.getAttribute("data-name");
        let catalogo = document.querySelector(idCatalogo);
        let carrosselSlider = catalogo.querySelector(".carrossel-slider");
        let slides = catalogo.getElementsByClassName("slider-items");
        let quantidade = 5;

        if (innerWidth < 1100) { quantidade = 4; }
        if (innerWidth < 800) { quantidade = 3; }
        if (innerWidth < 500) { quantidade = 2; }


        let larguraAtualSlide = (slides[0].offsetWidth * quantidade) * 0.978;

        // --------------------------------======================
        // ALIMENTANDO AS VARIÁVEIS GLOBAIS COM OS DADOS ATUAIS
        // --------------------------------======================
        carrosseisAtivos[idCatalogo] = carrosselSlider;
        // largurasCarrossel[idCatalogo] = slides[0].offsetWidth * quantidade; 

        document.documentElement.style.setProperty('--largura-slide', `${larguraAtualSlide}px`);

        if (counter < 0) {

            counter = 0;

            for (let i = 0; i < quantidade; i++) {
                let primeiroSlide = slides[0];
                let ultimoSlide = slides[slides.length - 1];
                carrosselSlider.insertBefore(ultimoSlide, primeiroSlide);
            }

            carrosselSlider.classList.remove("movein1", "movein2");
            carrosselSlider.offsetWidth;
            carrosselSlider.classList.add("movein2");

        }


        let moviment = larguraAtualSlide * counter;

        carrosselSlider.style.transform = `translateX(${-moviment}px)`;

        console.log(idCatalogo);
    })
});

arrowsNext.forEach((next) => {
    next.addEventListener("click", () => {

        counter = counter += 1;

        let idCatalogo = next.getAttribute("data-name");
        let catalogo = document.querySelector(idCatalogo);
        let carrosselSlider = catalogo.querySelector(".carrossel-slider");
        let slides = catalogo.getElementsByClassName("slider-items");
        let quantidade = 5;

        if (innerWidth < 1100) { quantidade = 4; }
        if (innerWidth < 800) { quantidade = 3; }
        if (innerWidth < 500) { quantidade = 2; }


        let larguraAtualSlide = (slides[0].offsetWidth * quantidade) * 0.978;

        // --------------------------------======================
        // ALIMENTANDO AS VARIÁVEIS GLOBAIS COM OS DADOS ATUAIS
        // --------------------------------======================
        carrosseisAtivos[idCatalogo] = carrosselSlider;
        // largurasCarrossel[idCatalogo] = slides[0].offsetWidth * quantidade;

        document.documentElement.style.setProperty('--largura-slide', `${larguraAtualSlide}px`);

        if (counter > 1) {

            counter = 1;

            for (let i = 0; i < quantidade; i++) {
                let primeiroSlide = slides[0];
                carrosselSlider.appendChild(primeiroSlide);
            }

            carrosselSlider.classList.remove("movein2", "movein1");
            carrosselSlider.offsetWidth;
            carrosselSlider.classList.add("movein1");
        }

        let moviment = larguraAtualSlide * counter;

        carrosselSlider.style.transform = `translateX(${-moviment}px)`;

        console.log(idCatalogo)
    })
});

// ==========================================
// EVENTO RESIZE ACESSANDO AS VARIÁVEIS GLOBAIS
// ==========================================
window.addEventListener("resize", () => {
    // Usamos o Object.keys para ler todos os carrosséis salvos nas globais
    Object.keys(carrosseisAtivos).forEach((idCatalogo) => {
        let carrosselSlider = carrosseisAtivos[idCatalogo];

        // Buscamos os slides daquele carrossel específico para recalcular o tamanho real atualizado
        let slides = carrosselSlider.getElementsByClassName("slider-items");

        let quantidade = 5;
        if (innerWidth < 1100) { quantidade = 4; }
        if (innerWidth < 800) { quantidade = 3; }
        if (innerWidth < 500) { quantidade = 2; }

        // Recalcula a largura com base no novo tamanho da tela
        let novaLargura = (slides[0].offsetWidth * quantidade) * 0.978;

        // Aplica o movimento corrigido usando o counter global
        let moviment = novaLargura * counter;
        carrosselSlider.style.transform = `translateX(${-moviment}px)`;
    });
});


