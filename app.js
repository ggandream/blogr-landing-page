const $nav__items = document.querySelectorAll(".nav__item");
const $nav__dropdowns = document.querySelectorAll(".nav__dropdown");

const $header__menu = document.querySelector(".header__menu");
const $dropdown = document.querySelector(".dropdown");

const $navigation_items = document.querySelectorAll(".navigation__item");

const $navigation__menu = document.querySelector(".navigation__menu");

// const $main = document.querySelector("main");
// const $footer = document.querySelector("footer");
const $html = document.querySelector("html");

$nav__items.forEach(function (nav__item, index) {
  nav__item.addEventListener("click", function () {
    const isExpanded = nav__item.getAttribute("aria-expanded") === "true";

    $nav__dropdowns.forEach((dropdown, index2) => {
      if (index2 !== index) {
        $nav__dropdowns[index2].classList.remove("dd-active");
        $nav__dropdowns[
          index2
        ].previousElementSibling.firstElementChild.classList.remove(
          "upsidedown",
        );
        $nav__dropdowns[index2].previousElementSibling.setAttribute(
          "aria-expanded",
          String(false),
        );
      }
    });

    $nav__dropdowns[index].classList.toggle("dd-active");
    $nav__dropdowns[
      index
    ].previousElementSibling.firstElementChild.classList.toggle("upsidedown");
    $nav__dropdowns[index].previousElementSibling.setAttribute(
      "aria-expanded",
      String(!isExpanded),
    );
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

// $navigation_items.forEach(function (item, index) {
//   item.addEventListener("click", () => {
//     item.nextElementSibling.classList.toggle("hidden");
//     item.firstElementChild.classList.toggle("upsidedown");

//     $navigation_items.forEach((btn, index2) => {
//       if (index2 !== index) {
//         btn.nextElementSibling.classList.add("hidden");
//         btn.firstElementChild.classList.remove("upsidedown");
//       }
//     });
//   });

//   item.addEventListener("keyup", (e) => {
//     if (e.key == "Escape") {
//       item.nextElementSibling.classList.toggle("hidden");
//       item.firstElementChild.classList.toggle("upsidedown");
//     }
//   });
// });

$navigation__menu.addEventListener("click", (e) => {
  if (e.target.matches(".navigation__item")) {
    e.target.nextElementSibling.classList.toggle("hidden");
    e.target.firstElementChild.classList.toggle("upsidedown");
  }

  $navigation_items.forEach((item) => {
    if (item !== e.target) {
      item.nextElementSibling.classList.add("hidden");
      item.firstElementChild.classList.remove("upsidedown");
    }
  });
});

$navigation__menu.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (e.target.matches(".navigation__item")) {
      e.target.nextElementSibling.classList.toggle("hidden");
      e.target.firstElementChild.classList.toggle("upsidedown");
    }
  }
});

$html.addEventListener("click", (e) => {
  if (!e.target.closest(".navigation__item")) {
    $navigation_items.forEach((btn) => {
      btn.nextElementSibling.classList.add("hidden");
      btn.firstElementChild.classList.remove("upsidedown");
    });
  }
});
