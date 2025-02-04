// Função para abrir o modal
function openModal() {
  // Adiciona a classe "activeModal" ao container do modal para exibi-lo
  modal_container.classList.add("activeModal");

  // Desabilita o scroll da página quando o modal estiver aberto
  body.style.overflowY = "hidden";

  // Adiciona um evento de clique ao modal_container
  modal_container.addEventListener("click", (ev) => {
    // Fecha o modal se o usuário clicar fora do conteúdo do modal (no fundo)
    if (ev.target.className.indexOf("modal-container") !== -1) {
      modal_container.classList.remove("activeModal"); // Remove a classe para esconder o modal
      body.style.overflowY = "scroll"; // Habilita novamente o scroll da página
    }
  });
}

// Seleciona o elemento do ícone do carrinho na navbar
const navbar__cart = document.querySelector(".navbar__cart");

// Adiciona um evento de clique ao ícone do carrinho para abrir o modal
navbar__cart.addEventListener("click", () => {
  openModal();
});

// Função para criar os elementos dentro do modal do carrinho
function create_modal_elements() {
  // Obtém a quantidade atual de itens no carrinho e a quantidade do produto selecionado
  let quantity_card = Number(cart__quantity.textContent);
  let quantity_products = Number(quantity.textContent);

  // Atualiza a quantidade total do carrinho
  quantity_card += quantity_products;
  cart__quantity.textContent = quantity_card;

  // Seleciona o modal, se já existir
  let modal = document.querySelector(".modal");
  
  // Cria um novo modal apenas se ele ainda não existir
  if (!modal) {
    modal = document.createElement("div");
    modal.classList.add("modal");

    // Criação da div que contém o título "Cart"
    const div_text_card = document.createElement("div");
    div_text_card.classList.add("text-cart");

    const cartText = document.createElement("p");
    cartText.textContent = "Cart";
    div_text_card.appendChild(cartText);

    // Criando a div que conterá os pedidos
    const ordersDiv = document.createElement("div");
    ordersDiv.classList.add("div-orders");

    // Criando a div que conterá a imagem, texto e ícone de exclusão
    const imgTextIconDiv = document.createElement("div");
    imgTextIconDiv.classList.add("div-img-text-icon");
    ordersDiv.appendChild(imgTextIconDiv);

    // Criando a div da imagem do produto
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("div-img");
    const img = document.createElement("img");
    img.src = "assets/images/image-product-1-thumbnail.jpg";
    img.alt = "imagem do produto";
    imgDiv.appendChild(img);
    imgTextIconDiv.appendChild(imgDiv);

    // Criando a div para o texto e preço do produto
    const textPriceDiv = document.createElement("div");
    textPriceDiv.classList.add("div-text-price");
    imgTextIconDiv.appendChild(textPriceDiv);

    // Criando o parágrafo do nome do produto
    const productText = document.createElement("p");
    productText.classList.add("text-fraco");
    productText.textContent = "Fall Limited Edition Sneakers";
    textPriceDiv.appendChild(productText);

    // Criando a div para o preço e quantidade
    const valueDiv = document.createElement("div");
    valueDiv.classList.add("div-value");
    textPriceDiv.appendChild(valueDiv);

    // Criando o preço unitário do produto
    const priceText = document.createElement("p");
    priceText.classList.add("text-fraco");
    priceText.textContent = "$125.00";
    valueDiv.appendChild(priceText);

    // Criando o multiplicador "x"
    const multiplyText = document.createElement("p");
    multiplyText.classList.add("text-fraco");
    multiplyText.textContent = "x";
    valueDiv.appendChild(multiplyText);

    // Criando o elemento que exibe a quantidade de produtos no carrinho
    const quantityText = document.createElement("p");
    quantityText.id = "quantity-products";
    quantityText.classList.add("text-fraco");
    quantityText.textContent = cart__quantity.textContent;
    valueDiv.appendChild(quantityText);

    // Criando o total do valor a pagar
    const totalValue = document.createElement("p");
    totalValue.id = "total-value";
    totalValue.textContent = ` $${quantity_card * 125}.00`;
    valueDiv.appendChild(totalValue);

    // Criando o ícone de exclusão do item no carrinho
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("div-icon");
    const iconImg = document.createElement("img");
    iconImg.src = "assets/images/icon-delete.svg";
    iconImg.alt = "deletar item";
    iconDiv.appendChild(iconImg);
    imgTextIconDiv.appendChild(iconDiv);

    // Criando o botão de checkout
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("btn-checkout");
    checkoutButton.textContent = "Checkout";
    ordersDiv.appendChild(checkoutButton);

    // Adicionando os elementos criados ao modal
    modal.append(div_text_card, ordersDiv);
    modal_container.appendChild(modal);

    // Evento de clique para remover o item do carrinho
    iconDiv.addEventListener("click", () => {
      modal_container.textContent = ""; // Limpa o modal
      criarModalVazio(); // Exibe a mensagem de carrinho vazio
      cart__quantity.textContent = 0; // Reseta a contagem de itens no carrinho
    });
  } else {
    // Atualiza os valores existentes no modal
    const quantityElement = document.getElementById("quantity-products");
    const totalValueElement = document.getElementById("total-value");
    const iconDiv = document.querySelector(".div-icon");

    if (quantityElement) {
      quantityElement.textContent = quantity_card.textContent;
    }

    if (totalValueElement) {
      totalValueElement.textContent = ` $${quantity_card * 125}.00`;
    }

    if (iconDiv) {
      iconDiv.addEventListener("click", () => {
        modal_container.innerHTML = "";
        criarModalVazio();
      });
    }
  }

  // Reseta a quantidade do input após adicionar ao carrinho
  quantity.textContent = 0;
}

// Função para criar um modal vazio quando o carrinho estiver limpo
function criarModalVazio() {
  // Criando a estrutura do modal vazio
  const modal_vazio = document.createElement("div");
  modal_vazio.classList.add("modal");

  if (modal_vazio) {
    // Criando a div que contém o texto "Cart"
    const textCartDiv = document.createElement("div");
    textCartDiv.classList.add("text-cart");

    const cartText = document.createElement("p");
    cartText.textContent = "Cart";
    textCartDiv.appendChild(cartText);

    // Criando a mensagem de carrinho vazio
    const emptyCartText = document.createElement("p");
    emptyCartText.classList.add("text-fraco");
    emptyCartText.textContent = "Your cart is empty";

    // Adicionando os elementos ao modal
    modal_vazio.appendChild(textCartDiv);
    modal_vazio.appendChild(emptyCartText);

    // Adicionando o modal ao container principal
    modal_container.appendChild(modal_vazio);
  }
}
