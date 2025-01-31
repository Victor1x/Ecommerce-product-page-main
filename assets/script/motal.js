const modal_container = document.querySelector(".modal-container-cart");
const modal = document.querySelector(".modal");
function openModal(message = sempedido) {
  modal_container.classList.add("activeModal");
  modal.innerHTML = message;
  body.style.overflowY = 'hidden';
  modal_container.addEventListener("click", (ev) => {
    if (ev.target.className.indexOf("modal-container") !== -1) {
      modal_container.classList.remove("activeModal");
      body.style.overflowY = 'scroll';
    }
  });
}
const navbar__cart = document.querySelector(".navbar__cart");
navbar__cart.addEventListener("click", () => {
  openModal(`<div class="text-cart">
        <p>Cart</p>
      </div>
      <div class="div-orders">
        <div class="div-img-text-icon">

          <div class="div-img">
            <img src="assets/images/image-product-1-thumbnail.jpg" alt="">
          </div>

          <div class="div-text-price">
            <p class="text-fraco">Fall Limited Edition Sneakers</p>
            <div class="div-value">
              <p class="text-fraco">$125.00</p>
              <p class="text-fraco">x</p>
              <p id="quantity-products" class="text-fraco">3</p>
              <p id="total-value">$375.00</p>
            </div>
          </div>
          <div class="div-icon">
            <img src="assets/images/icon-delete.svg" alt="">
          </div>
        </div>
        <button class="btn-checkout">Checkout</button>
      </div>`);
});
