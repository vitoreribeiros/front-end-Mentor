const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
const menuList = document.querySelector(".menu-list");
const menu = document.querySelector(".menu");
const menuListMobile = document.querySelector(".menu-list-mobile");

function toggle() {
  menuBtn.classList.toggle("active");
  menuClose.classList.toggle("active");
  menu.classList.toggle("show-menu");
  menuListMobile.classList.toggle("show-menu");
}
