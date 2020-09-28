//бургер меню
const menuToggle = document.querySelector(".menu-icon");
const mobileNavContainer = document.querySelector(".menu__mobile");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("menu-icon-active");
  mobileNavContainer.classList.toggle("menu__mobile--active");
};

$(".nav__item").click(function (event) {
  $(".menu-icon").removeClass(".menu-icon-active");
  $(".menu__mobile").removeClass(".menu__mobile--active");
});