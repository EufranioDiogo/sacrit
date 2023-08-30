let showMenu = false;
const fixedMenu = document.querySelector('.menu-container-fixed');

document.addEventListener("scroll", (event) => {
  if (showMenu == false && window.scrollY > 200) {
    showMenu = true;
    fixedMenu.style.top = 0;
  } else if (showMenu == true && window.scrollY <= 200) {
    showMenu = false;
    fixedMenu.style.top = "-200px";
  }
})