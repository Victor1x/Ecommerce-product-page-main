// Seleciona os elementos do DOM
const modal_container = document.querySelector(".modal-container-cart");

// Botões de navegação das imagens
const btnSetasDireita = document.querySelector(".btn__setas__direita");
const btnSetasEsquerda = document.querySelector(".btn_setas__esquerda");

// Imagens principais e miniaturas
const imgMain = document.querySelector(".img__main");
const imgActive = document.querySelectorAll(".img__active");

// Botões e elementos do carrinho
const btnAddCart = document.getElementById("btn__add__cart");
const btnMenos = document.getElementById("btn__menos");
const btnMais = document.getElementById("btn__mais");
let quantity = document.querySelector(
  ".container__product__info__quantity__control__value"
);
let cart__quantity = document.querySelector(".cart__quantity");

// Variável para controlar o índice da imagem exibida
let index = 0;

// Caminho das imagens do produto
const imagens = [
  "assets/images/image-product-1.jpg",
  "assets/images/image-product-2.jpg",
  "assets/images/image-product-3.jpg",
  "assets/images/image-product-4.jpg",
];

// Função para alterar a imagem principal ao passar o mouse sobre as miniaturas
imgActive.forEach((img, i) => {
  img.addEventListener("mouseover", () => {
    imgMain.classList.add("hidden"); // Adiciona a classe para efeito de transição
    setTimeout(() => {
      imgMain.src = imagens[i]; // Atualiza a imagem principal
      imgMain.classList.remove("hidden"); // Remove a classe para exibir suavemente
    }, 400); // Tempo da transição
  });
});

// Função para navegar pelas imagens ao clicar na seta esquerda
btnSetasEsquerda.addEventListener("click", () => {
  if (index < imagens.length - 1) {
    btnSetasDireita.classList.remove("disabled"); // Habilita seta direita

    index++; // Incrementa o índice da imagem
    atualizarImagem();
  } else {
    btnSetasEsquerda.classList.add("disabled"); // Desativa seta esquerda se for a última imagem
  }
});

// Função para navegar pelas imagens ao clicar na seta direita
btnSetasDireita.addEventListener("click", () => {
  if (index > 0) {
    btnSetasEsquerda.classList.remove("disabled"); // Habilita seta esquerda

    index--; // Decrementa o índice da imagem
    atualizarImagem();
  } else {
    btnSetasDireita.classList.add("disabled"); // Desativa seta direita se for a primeira imagem
  }
});

// Função para atualizar a imagem principal com transição
function atualizarImagem() {
  imgMain.classList.add("hidden"); // Adiciona efeito de transição
  setTimeout(() => {
    imgMain.src = imagens[index]; // Atualiza a imagem
    imgMain.classList.remove("hidden"); // Remove efeito de transição
  }, 400); // Tempo da transição
}

// Evento para diminuir a quantidade do produto
btnMenos.addEventListener("click", () => {
  if (quantity.textContent > 0) {
    quantity.textContent--;
  }
});

// Evento para aumentar a quantidade do produto
btnMais.addEventListener("click", () => {
  quantity.textContent++;
});

// Evento para adicionar ao carrinho e abrir o modal
btnAddCart.addEventListener("click", () => {
  if (Number(quantity.textContent) === 0) {
    return;
  } else {
    modal_container.innerHTML = ""; // Limpa o modal antes de adicionar novos elementos
    create_modal_elements(); // Função que cria os elementos do modal do carrinho
  }
});
