//! Убираем при скролле header ***************************
let lastScroll = 0;
const defaultOffset = 100;
const menu = document.querySelector(".js-menu");

const scrollPosition = () =>
  window.pageYOffset ?? document.documentElement.scrollTop;
const containHide = () => menu.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    //scroll down
    menu.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    menu.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});
