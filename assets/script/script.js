const container__product__img = document.querySelector(
  ".container__product__img"
);

const btn__setas__direita = document.querySelector(".btn__setas__direita");
const btn_setas__esquerda = document.querySelector(".btn_setas__esquerda");

const img__main = document.querySelector(".img__main");
const img__smaller2 = document.querySelector(".img__smaller2");
const img__smaller3 = document.querySelector(".img__smaller3");
const img__smaller4 = document.querySelector(".img__smaller4");
const img__active = document.querySelectorAll(".img__active");

let isFixed = false; // Variável para controlar se a imagem está fixada

const caminho = [
  "assets/images/image-product-1.jpg",
  "assets/images/image-product-2.jpg",
  "assets/images/image-product-3.jpg",
  "assets/images/image-product-4.jpg",
];

img__active.forEach((img, index) => {
  // Evento de mouseover
  img.addEventListener("mouseover", () => {
   
      // Somente se a imagem não estiver fixada
      img__main.classList.add("hidden"); // Inicia a transição
      setTimeout(() => {
        img__main.src = caminho[index]; // Muda para a imagem correspondente
        img__main.classList.remove("hidden"); // Reexibe suavemente
      }, 400); // Tempo da transição
    
  });
})





//   // Evento de mouseout
//   img.addEventListener("mouseout", () => {
//     if (!isFixed) {
//       // Somente se a imagem não estiver fixada
//       img__main.classList.add("hidden"); // Inicia a transição
//       setTimeout(() => {
//         img__main.src = caminho[0]; // Volta à imagem inicial
//         img__main.classList.remove("hidden"); // Reexibe suavemente
//       }, 400);
//     }
//   });

//   // Evento de clique
//   img.addEventListener("click", () => {
//     isFixed = true; // Define a imagem como fixada
//     img__main.classList.add("hidden"); // Inicia a transição
//     setTimeout(() => {
//       img__main.src = caminho[index + 1]; // Muda para a imagem correspondente
//       img__main.classList.remove("hidden"); // Reexibe suavemente
//     }, 400);
//   });
 
// });

// // Verificação de clique fora do contêiner
// document.addEventListener("click", (e) => {
//   // Verifica se o clique foi fora do contêiner
//   if (!container__product__img.contains(e.target)) {
//     isFixed = false; // Reseta o estado fixado
//     img__main.classList.add("hidden"); // Inicia a transição
//     setTimeout(() => {
//       img__main.src = caminho[0]; // Volta à imagem inicial
//       img__main.classList.remove("hidden"); // Reexibe suavemente
//     }, 400);
//   }
// });