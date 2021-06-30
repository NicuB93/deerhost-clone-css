const burgerMenu = document.querySelector(".burger");
const burgerItems = document.querySelector(".nav-items-burger");
const overlay = document.querySelector(".overlay");

const burgerMenuToggle = () => {
  burgerItems.classList.toggle("nav-items-burger-enabled");
  overlay.classList.toggle("overlay-on");
};

burgerMenu.addEventListener("click", () => {
  burgerMenuToggle();
});

document.querySelector(".close-burger").addEventListener("click", () => {
  burgerMenuToggle();
});

overlay.addEventListener("click", () => {
  burgerMenuToggle();
});
