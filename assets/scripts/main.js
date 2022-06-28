// ========== expander menu ==========
const navToggle = document.querySelector(".nav__toggle");
const navBar = document.querySelector(".nav__menu");
const navScreen = document.querySelector(".nav__screen");

window.onclick = function (e) {
  if (e.target == navScreen) {
    navBar.classList.remove("show__left");
    navScreen.classList.remove("show__block");
  }
};

navToggle.onclick = function () {
  navBar.classList.add("show__left");
  navScreen.classList.add("show__block");
};

// active and remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkActive() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  navBar.classList.remove("show__left");
  navScreen.classList.remove("show__block");
}

navLink.forEach((n) => n.addEventListener("click", linkActive));

// navbar on scroll
window.addEventListener("scroll", function () {
  const navigation = document.querySelector("#navigations");

  navigation.classList.toggle("display__color", window.scrollY > 200);
});

let scrollPrevious = window.pageYOffset;
let navigations = document.getElementById("navigations");
window.onscroll = function () {
  let scrollCurrent = window.pageYOffset;
  if (scrollPrevious < scrollCurrent && scrollPrevious > 600) {
    navigations.style.top = "-80px";
  } else {
    navigations.style.top = "0";
  }

  scrollPrevious = scrollCurrent;
};
