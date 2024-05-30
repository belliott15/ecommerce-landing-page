const product = document.querySelector(".product");
const cartIcon = document.querySelector("#cart-icon");
const blur = document.querySelector("#blur");
const quantity = document.querySelector(".quantity");

cartIcon.addEventListener("click", () => {
  if (quantity.textContent >= 1) {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const itemContainer = document.createElement("div");
    const thumbnail = document.createElement("img");
    const descriptionContainer = document.createElement("div");
    const description = document.createElement("p");
    const totalPrice = document.createElement("p");
    const trash = document.createElement("img");
    const checkout = document.createElement("button");

    //put content in the new elements
    title.textContent = "Cart";
    thumbnail.src = "./images/image-product-1-thumbnail.jpg";
    description.textContent = "Fall Limited Edition Sneakers";
    totalPrice.textContent = `$124.99 x ${quantity.textContent} = $${
      Math.round(quantity.textContent * 124.99 * 100) / 100
    } `;
    trash.src = "./images/icon-delete.svg";
    checkout.textContent = "Checkout";

    //style the elements
    descriptionContainer.classList.add("description-container");
    itemContainer.classList.add("item-container");
    container.classList.add("cart-container");
    checkout.classList.add("checkout-button");
    blur.classList.remove("hidden");
    blur.classList.add("blur");

    //append elements to the containers
    descriptionContainer.append(description, totalPrice, trash);
    itemContainer.append(thumbnail, descriptionContainer);
    container.append(title, itemContainer, checkout);
    product.append(container);
  } else {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const itemContainer = document.createElement("div");
    itemContainer.textContent = "Ope! Your cart is empty.";

    title.textContent = "Cart";
    itemContainer.innerHTML = "<p><b>Ope! Your cart is empty.</b></p>";

    container.classList.add("cart-container");
    itemContainer.classList.add("item-container");
    blur.classList.remove("hidden");
    blur.classList.add("blur");

    container.append(title, itemContainer);
    product.append(container);
  }
});
