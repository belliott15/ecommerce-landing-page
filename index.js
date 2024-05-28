const menuIcon = document.querySelector("#menu");
const menu = document.querySelector("#nav-menu");
const closeIcon = document.querySelector(".close-icon");
const blur = document.querySelector("#blur");
const logo = document.querySelector("#logo");
const cartIcon = document.querySelector("#cart-icon");
const cartIconQuantity = document.querySelector(".nav-cart-container");
const avatarIcon = document.querySelector("#avatar-icon");
const imageContainer = document.querySelector("#carouselImageContainer");
const leftArrow = document.querySelector(".carousel-button-left");
const rightArrow = document.querySelector(".carousel-button-right");
const carouselImage = document.querySelector("#carousel-image");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const quantity = document.querySelector(".quantity");
const addToCart = document.querySelector(".add-to-cart");
const product = document.querySelector(".product");

let counter = 0;

// nav bar section
menuIcon.addEventListener("click", () => {
  console.log("you clicked the menu");
  menu.classList.remove("nav-menu");
  menu.classList.add("menu-visible");
  blur.classList.remove("hidden");
  blur.classList.add("blur");
});

closeIcon.addEventListener("click", () => {
  console.log("close icon");
  menu.classList.remove("menu-visible");
  menu.classList.add("nav-menu");
  blur.classList.remove("blur");
  blur.classList.add("hidden");
});

logo.addEventListener("click", () => {
  console.log("return to homepage");
});

blur.addEventListener("click", () => {
  menu.classList.remove("menu-visible");
  menu.classList.add("nav-menu");
  blur.classList.remove("blur");
  blur.classList.add("hidden");
});

cartIcon.addEventListener("click", () => {
  console.log("you clicked the cart");

  const container = document.createElement("div");
  const title = document.createElement("h1");
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
  totalPrice.textContent = `$125.00 x ${quantity.textContent} = ${
    quantity.textContent * 125.0
  } `;
  trash.src = "./images/icon-delete.svg";
  checkout.textContent = "Checkout";

  //style the elements
  descriptionContainer.classList.add("description-container");
  itemContainer.classList.add("item-container");
  container.classList.add("cart-container");
  checkout.classList.add("checkout-button");

  //append elements to the containers
  descriptionContainer.append(description, totalPrice, trash);
  itemContainer.append(thumbnail, descriptionContainer);
  container.append(title, itemContainer, checkout);
  product.append(container);
});

avatarIcon.addEventListener("click", () => {
  console.log("open user profile");
});

// carousel section

const slideImage = (oldSrc, newSrc, direction) => {
  const slideAmount = direction === "left" ? "-100%" : "100%";
  imageContainer.style.transform = `translateX(${slideAmount})`;
  setTimeout(() => {
    imageContainer.innerHTML = `
    <img src='${oldSrc}' class='carousel-image' alt='beige sneaker with orange background'/>
    <img src='${newSrc}' class='carousel-image' alt='beige sneaker with orange background'/>
    `;
    imageContainer.style.transform = "translateX(0)";
  }, 500);
};

leftArrow.addEventListener("click", () => {
  counter = counter <= 1 ? 4 : counter - 1;
  carouselImage.src = `./images/image-product-${counter}.jpg`;
  // slideImage(
  //   `./images/image-product-${counter}.jpg`,
  //   `./images/image-product-${counter - 1}.jpg`,
  //   "left"
  // );
});

rightArrow.addEventListener("click", () => {
  counter = counter >= 4 ? 1 : counter + 1;
  carouselImage.src = `./images/image-product-${counter}.jpg`;
  // slideImage(
  //   `./images/image-product-${counter}.jpg`,
  //   `./images/image-product-${counter + 1}.jpg`,
  //   "right"
  // );
});

// quantity and add to cart section
minusButton.addEventListener("click", () => {
  quantity.textContent >= 1
    ? (quantity.textContent -= 1)
    : (quantity.textContent = 0);
});

plusButton.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) + 1;
});

addToCart.addEventListener("click", () => {
  console.log(`${quantity.textContent} items added`);
  if (quantity.textContent > 0) {
    const p = document.createElement("p");
    p.textContent += quantity.textContent;
    p.classList.add("cart-quicklook");
    cartIconQuantity.append(p);
  }
});
