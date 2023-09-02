const closeButton = document.querySelector('#close-mobile-menu')
const rightContainer = document.querySelector('.mobile-menu-container--right');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileMenuHamburger = document.querySelector('#open-mobile-menu-1')
const mobileMenuHamburgerHero = document.querySelector('#open-mobile-menu-2');
let isOnMenu = false;


closeButton.addEventListener('click', () => {
  mobileMenuContainer.classList.add('mobile-menu-container--off');
  rightContainer.classList.add('mobile-menu-container--right--off');

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});

mobileMenuHamburger.addEventListener('click', (ev) => {
  ev.stopPropagation();
  mobileMenuContainer.classList.toggle('mobile-menu-container--off');
  rightContainer.classList.toggle('mobile-menu-container--right--off');

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});

mobileMenuHamburgerHero.addEventListener('click', () => {
  mobileMenuContainer.classList.toggle('mobile-menu-container--off');
  rightContainer.classList.toggle('mobile-menu-container--right--off');

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});