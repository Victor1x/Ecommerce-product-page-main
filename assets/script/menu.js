// Seleciona os elementos do DOM
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".mobile__menu");
const navList = document.querySelector(".nav__list");
const shadow = document.querySelector("#shadow");
const navItems = document.querySelectorAll(".nav__item");

// Função para animar os links do menu ao abrir/fechar
function animateLinks() {
  navItems.forEach((link, index) => {
    link.style.animation = mobileMenu.classList.contains("active")
      ? `nav__itemFade 0.5s ease forwards ${index / 7 + 0.3}s`
      : "";
  });
}

// Função para abrir e fechar o menu mobile
function toggleMenu() {
  const isActive = mobileMenu.classList.toggle("active");//muito bom 
  navList.classList.toggle("active");
  animateLinks();

  // Controla a exibição do fundo escuro e o scroll da página
  shadow.style.display = isActive ? "flex" : "none";
  body.style.overflowY = isActive ? "hidden" : "scroll";

  // Acessibilidade: Define se o menu está expandido ou não
  mobileMenu.setAttribute("aria-expanded", isActive);
}

// Função para fechar o menu
function closeMenu() {
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    navList.classList.remove("active");
    shadow.style.display = "none";
    body.style.overflowY = "scroll";
    animateLinks();
    mobileMenu.setAttribute("aria-expanded", "false");
  }
}

// Evento para abrir/fechar o menu ao clicar no ícone do menu mobile
mobileMenu.addEventListener("click", toggleMenu);

// Evento para fechar o menu ao clicar fora dele (no fundo escuro)
shadow.addEventListener("click", closeMenu);

// Fecha o menu ao pressionar a tecla "Esc"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Evento para esconder o fundo escuro ao redimensionar a tela
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    closeMenu(); // Fecha o menu se a tela for maior
  }
});




  




