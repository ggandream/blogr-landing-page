const $nav__items = document.querySelectorAll(".nav__item");

const $header__menu = document.querySelector(".header__menu");
const $dropdown = document.querySelector(".dropdown");

const $navigation_items = document.querySelectorAll(".navigation__item");

// const $main = document.querySelector("main");
// const $footer = document.querySelector("footer");
const $html = document.querySelector("html");

$nav__items.forEach(function (nav__item, index) {
  nav__item.addEventListener("click", function () {
    const isExpanded = nav__item.getAttribute("aria-expanded") === "true";

    $nav__items.forEach((navItem2, index2) => {
      if (index !== index2) {
        navItem2.nextElementSibling.classList.add("hidden");
        navItem2.firstElementChild.classList.remove("upsidedown");
        navItem2.setAttribute("aria-expanded", String(!isExpanded));
      }
    });

    nav__item.nextElementSibling.classList.toggle("hidden");
    nav__item.firstElementChild.classList.toggle("upsidedown");
    const navItemId = nav__item.getAttribute("id");

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

$navigation_items.forEach(function (item, index) {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("hidden");
    item.firstElementChild.classList.toggle("upsidedown");

    $navigation_items.forEach((btn, index2) => {
      if (index2 !== index) {
        btn.nextElementSibling.classList.add("hidden");
        btn.firstElementChild.classList.remove("upsidedown");
      }
    });
  });

  item.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      item.nextElementSibling.classList.toggle("hidden");
      item.firstElementChild.classList.toggle("upsidedown");
    }
  });
});

$html.addEventListener("click", (e) => {
  if (!e.target.closest(".navigation__item")) {
    $navigation_items.forEach((btn) => {
      btn.nextElementSibling.classList.add("hidden");
      btn.firstElementChild.classList.remove("upsidedown");
    });
  }
});
