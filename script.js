// mobile menu
const btnNavEl = document.querySelector(".icon-nav-menu");
const mainHeaderEl = document.querySelector(".main-header");
btnNavEl.addEventListener("click", function () {
  mainHeaderEl.classList.toggle("nav-open");
});
