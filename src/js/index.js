
let counter = 0; // Contador

const cabecalho = document.querySelector(".cabecalho");


window.addEventListener("scroll", () => {


if (window.pageYOffset > 10) {

    cabecalho.classList.add("active");

    // console.log(window.pageYOffset);

} else {

    cabecalho.classList.remove("active");
}

})

// Função para passar slides

function showCatalogo1(n) {

let catalogo1 = document.querySelector("#catalogo1");
let carrosselSlider1 = catalogo1.querySelector(".carrossel-slider");
let slides = catalogo1.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];


if (n < 0) {

        counter = 0;

        carrosselSlider1.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider1.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider1.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider1.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider1.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider1.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider1.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider1.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider1.offsetWidth;
        carrosselSlider1.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider1.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo2(n) {

let catalogo2 = document.querySelector("#catalogo2");
let carrosselSlider2 = catalogo2.querySelector(".carrossel-slider");
let slides = catalogo2.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider2.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider2.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider2.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider2.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider2de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider2.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider2.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider2.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider2.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider2.offsetWidth;
        carrosselSlider2.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider2.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo4(n) {

let catalogo4 = document.querySelector("#catalogo4");
let carrosselSlider4 = catalogo4.querySelector(".carrossel-slider");
let slides = catalogo4.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider4.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider4.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider4.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider4.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider4.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider4.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider4.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider4.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider4.offsetWidth;
        carrosselSlider4.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider4.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo5(n) {

let catalogo5 = document.querySelector("#catalogo5");
let carrosselSlider5 = catalogo5.querySelector(".carrossel-slider");
let slides = catalogo5.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider5.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider5.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider5.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider5.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider5.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider5.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider5.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider5.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider5.offsetWidth;
        carrosselSlider5.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider5.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo6(n) {

let catalogo6 = document.querySelector("#catalogo6");
let carrosselSlider6 = catalogo6.querySelector(".carrossel-slider");
let slides = catalogo6.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider6.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider6.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider6.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider6.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider6.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider6.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider6.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider6.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider6.offsetWidth;
        carrosselSlider6.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider6.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo7(n) {

let catalogo7 = document.querySelector("#catalogo7");
let carrosselSlider7 = catalogo7.querySelector(".carrossel-slider");
let slides = catalogo7.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider7.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider7.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider7.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider7.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider7.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider7.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider7.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider7.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider7.offsetWidth;
        carrosselSlider7.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider7.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo8(n) {

let catalogo8 = document.querySelector("#catalogo8");
let carrosselSlider8 = catalogo8.querySelector(".carrossel-slider");
let slides = catalogo8.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider8.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider8.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider8.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider8.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider8.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider8.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider8.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider8.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider8.offsetWidth;
        carrosselSlider8.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider8.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo9(n) {

let catalogo9 = document.querySelector("#catalogo9");
let carrosselSlider9 = catalogo9.querySelector(".carrossel-slider");
let slides = catalogo9.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider9.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider9.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider9.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider9.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider9.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider9.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider9.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider9.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider9.offsetWidth;
        carrosselSlider9.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider9.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}
function showCatalogo10(n) {

let catalogo10 = document.querySelector("#catalogo10");
let carrosselSlider10 = catalogo10.querySelector(".carrossel-slider");
let slides = catalogo10.getElementsByClassName("slider-wrapper");
const primeiroSlide = slides[0];
const ultimoSlide = slides[2];

if (n < 0) {

        counter = 0;

        carrosselSlider10.insertBefore(ultimoSlide, primeiroSlide); // método insertBefore que serve para adicionar o "último slide" antes do primeiro slide na coleção, ou seja como primeiro filho

        carrosselSlider10.classList.remove("movein1"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider10.classList.remove("movein2"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider10.offsetWidth; // a propriedade offsetWidth serve para trazer o valor do tamanho real do elemento carrosselSlider de forma dinâmica a medida que o usuário aciona o evento para passar os slides, ela basicamente reseta esse valor, para que a animação seja realizada de forma flexível
        carrosselSlider10.classList.add("movein2"); // adicionando a 2º classe de animação do movimento dos slides

    }

    if (n > 1) {

        counter = 1;

        carrosselSlider10.appendChild(primeiroSlide); // método appendChild que serve para adicionar o "primeiro slide" depois do último slide na coleção, ou seja como último filho

        carrosselSlider10.classList.remove("movein2"); // removendo a 1º classe de animação do movimento dos slides
        carrosselSlider10.classList.remove("movein1"); // removendo a 2º classe de animação do movimento dos slides
        carrosselSlider10.offsetWidth;
        carrosselSlider10.classList.add("movein1"); // adicionando a 1º classe de animação do movimento dos slides
    }

    let moviment = 1250 * counter; // variável recebe o valor responsável por controlar o movimento do carrosselSlider, que armazena a largura dos slides dos personagens multiplicado pelo valor do "counter"

    // if (innerWidth < 1200) { // se "innerWidth" (largura da viewport) for menor que 1200px "moviment" irá receber um valor referente ao tamanho dos slides dos personagens que serão redimensionados 

    //     moviment = 86 * counter;
    // }

    // if (innerWidth < 970) {

    //     moviment = 65 * counter;
    // }

    carrosselSlider10.style.transform = `translateX(${-moviment}px)`; // comando responsável por movimentar o carrossel verticalmente usando a propriedade "transform" do style. 

}



function passCarrossel1(n) {

    showCatalogo1(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel2(n) {

    showCatalogo2(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
// function passCarrossel3(n) {

//     showCatalogo3(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
// }
function passCarrossel4(n) {

    showCatalogo4(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel5(n) {

    showCatalogo5(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel6(n) {

    showCatalogo6(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel7(n) {

    showCatalogo7(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel8(n) {

    showCatalogo8(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel9(n) {

    showCatalogo9(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}
function passCarrossel10(n) {

    showCatalogo10(counter += n); // chamando função showCharacter e atribuindo como argumento a variável counter + n e atribuindo essa a soma a counter
}