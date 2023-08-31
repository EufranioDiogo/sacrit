const closeButton = document.querySelector('#close-mobile-menu')
const rightContainer = document.querySelector('.mobile-menu-container--right');
const mobileMenuContainer = document.querySelector('#open-mobile-menu-1');
const mobileMenuHamburger = document.querySelector('#open-mobile-menu-2')
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