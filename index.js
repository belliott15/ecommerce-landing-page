const menuIcon = document.querySelector("#menu");
const menu = document.querySelector("#nav-menu");
const closeIcon = document.querySelector(".close-icon");
const blur = document.querySelector("#blur");
const logo = document.querySelector("#logo");
const cartIcon = document.querySelector("#cart-icon");
const avatarIcon = document.querySelector("#avatar-icon");
const leftArrow = document.querySelector(".carousel-button-left");
const rightArrow = document.querySelector(".carousel-button-right");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const quantity = document.querySelector(".quantity");

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
  console.log("open up model");
});

avatarIcon.addEventListener("click", () => {
  console.log("open user profile");
});

// carousel section
leftArrow.addEventListener("click", () => {
  console.log("left arrow");
});
rightArrow.addEventListener("click", () => {
  console.log("right arrow");
});

// quantity and add to cart section
minusButton.addEventListener("click", () => {
  if (quantity.textContent >= 1) {
    quantity.textContent -= 1;
  } else {
    return;
  }
});

plusButton.addEventListener("click", () => {
  quantity.textContent = Number(quantity.textContent) + 1;
});
