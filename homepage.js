'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
const popularList = document.querySelector(".popular-list");
const popularCard = popularList.querySelector(".popular-card");
const nextArrow = document.querySelector(".next-arrow");

nextArrow.addEventListener("click", () => {
  const newCard = popularCard.cloneNode(true);
  popularList.appendChild(newCard);
});
