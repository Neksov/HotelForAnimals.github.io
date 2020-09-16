//бургер меню
const menuToggle = document.querySelector("#menu-togle");
const mobileNavContainer = document.querySelector(".menu__nav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("menu-icon-active");
  mobileNavContainer.classList.toggle("menu__nav--active");
};
$(".nav__item").click(function (event) {
  $(".menu-icon").removeClass(".menu-icon-active");
  $(".menu__nav").removeClass(".menu__nav--active");
});