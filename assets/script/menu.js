const body = document.querySelector("body");
const mobile__menu = document.querySelector(".mobile__menu");
const nav__list = document.querySelector(".nav__list");
const shadow = document.querySelector("#shadow");
const nav__item = document.querySelectorAll(".nav__item");

  function animateLinks() {
    nav__item.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav__itemFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  }

  function Active(mobile__menu, nav__list) {
    mobile__menu.addEventListener("click", (event) => {
        event.stopPropagation(); // Impede o clique de se propagar para o documento
        mobile__menu.classList.toggle("active");
        nav__list.classList.toggle("active");
        animateLinks()

        if (mobile__menu.classList.contains('active')) {
            shadow.style.display = 'flex';
            body.style.overflowY = 'hidden';
        } else {
            shadow.style.display = 'none';
            body.style.overflowY = 'scroll';
        }
    });
}

// Função para fechar o menu
function closeMenu() {
    if (mobile__menu.classList.contains('active')) {
        mobile__menu.classList.remove("active");
        nav__list.classList.remove("active");
        shadow.style.display = 'none';
        body.style.overflowY = 'scroll';
    }
}

// Evento para fechar o menu ao clicar fora dele
shadow.addEventListener("click", (event) => {
    if (!nav__list.contains(event.target) && !mobile__menu.contains(event.target)) {
        closeMenu();
    }
});



window.addEventListener('resize', () => { // Adicione um ouvinte de evento de redimensionamento   
  // ==>resize<==
  //Ajustes dinâmicos para layout responsivo ou elementos que dependem do tamanho da janela
  //Quando a janela do navegador é redimensionada
  if (window.innerWidth > 850) {
    shadow.style.display = 'none'; // Altere para 'none', 'inline', etc., se necessário
  } 
});

// Evento para fechar o menu ao clicar no fundo escuro (shadow)
shadow.addEventListener("click", closeMenu);
// Inicializa a funcionalidade do menu
Active(mobile__menu, nav__list);



  




