document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceLabel = document.getElementById("total-price");
  let totalPrice = 0;

  addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          const product = event.target.parentNode;
          const productName = product.querySelector("h3").textContent;
          const productPrice = parseFloat(product.querySelector("p").textContent.replace("Ціна: $", ""));
          totalPrice += productPrice;

          const cartItem = document.createElement("div");
          cartItem.innerHTML = `
              <span>${productName}</span>
              <span>$${productPrice.toFixed(2)}</span>
          `;
          cartItemsContainer.appendChild(cartItem);

          totalPriceLabel.textContent = "$" + totalPrice.toFixed(2);
      });
  });
});
