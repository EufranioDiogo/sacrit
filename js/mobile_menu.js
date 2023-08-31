const closeButton = document.querySelector('.mobile-menu-container--right .mobile-menu-container--right-top .menu-hambuerger-container')
const rightContainer = document.querySelector('.mobile-menu-container--right');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileMenuHamburger = document.querySelector('.menu-container-fixed .menu-hambuerger-container')
const mobileMenuHamburgerHero = document.querySelector('.menu-hambuerger-container--hero');
let isOnMenu = false;


closeButton.addEventListener('click', (ev) => {
  console.log('dev1')
  mobileMenuContainer.classList.toggle('mobile-menu-container--off');
  rightContainer.classList.toggle('mobile-menu-container--right--off');
  console.log('dev2')

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});

mobileMenuHamburger.addEventListener('click', (ev) => {
  mobileMenuContainer.classList.toggle('mobile-menu-container--off');
  rightContainer.classList.toggle('mobile-menu-container--right--off');


  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});