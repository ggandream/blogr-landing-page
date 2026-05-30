const $nav__items = document.querySelectorAll(".nav__item");
const $header__menu = document.querySelector(".header__menu");
const $dropdown = document.querySelector(".dropdown");

$nav__items.forEach(function (nav__item) {
  nav__item.addEventListener("click", function () {
    nav__item.nextElementSibling.classList.toggle("hidden");
    nav__item.firstElementChild.classList.toggle("upsidedown");

    const isExpanded = nav__item.getAttribute("aria-expanded") === "true";
    nav__item.setAttribute("aria-expanded", String(!isExpanded));
  });
});

$header__menu.addEventListener("click", function () {
  $dropdown.classList.toggle("hidden");

  if (
    $header__menu.firstElementChild.getAttribute("src") ===
    "./images/icon-hamburger.svg"
  ) {
    $header__menu.firstElementChild.setAttribute(
      "src",
      "./images/icon-close.svg",
    );
    $dropdown.setAttribute("aria-hidden", String(false));
  } else {
    $header__menu.firstElementChild.setAttribute(
      "src",
      "./images/icon-hamburger.svg",
    );
    $dropdown.setAttribute("aria-hidden", String(true));
  }
});
