// import Alpine from "alpinejs";

// window.Alpine = Alpine;

// Alpine.start();

// // hamburger menu
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

// // navbar fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//     toTop.classList.remove("hidden");
//   } else {
//     header.classList.remove("navbar-fixed");
//     toTop.classList.remove("flex");
//   }
// };

// // collapse when click outside hamburger menu
// window.addEventListener("click", function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });

// dark toggle mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// move toggle position according to the theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
