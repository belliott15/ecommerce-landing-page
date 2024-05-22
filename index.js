const menuIcon = document.querySelector("#menu");
const menu = document.querySelector("#nav-menu");
const closeIcon = document.querySelector(".close-icon");
const blur = document.querySelector("#blur");
const logo = document.querySelector("#logo");
const cartIcon = document.querySelector("#cart-icon");
const avatarIcon = document.querySelector("#avatar-icon");
const imageContainer = document.querySelector("#carouselImageContainer");
const leftArrow = document.querySelector(".carousel-button-left");
const rightArrow = document.querySelector(".carousel-button-right");
const carouselImage = document.querySelector("#carousel-image");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const quantity = document.querySelector(".quantity");

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
  console.log("open up model");
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
  slideImage(
    `./images/image-product-${counter}.jpg`,
    `./images/image-product-${counter - 1}.jpg`,
    "left"
  );
});

rightArrow.addEventListener("click", () => {
  counter = counter >= 4 ? 1 : counter + 1;
  slideImage(
    `./images/image-product-${counter}.jpg`,
    `./images/image-product-${counter + 1}.jpg`,
    "right"
  );
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
