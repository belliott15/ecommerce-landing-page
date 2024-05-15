const menu = document.querySelector("#menu");
const logo = document.querySelector("#logo");
const cartIcon = document.querySelector("#cart-icon");
const avatarIcon = document.querySelector("#avatar-icon");

menu.addEventListener("click", () => {
  console.log("you clicked the menu");
});

logo.addEventListener("click", () => {
  console.log("return to homepage");
});

cartIcon.addEventListener("click", () => {
  console.log("open up model");
});

avatarIcon.addEventListener("click", () => {
  console.log("open user profile");
});
