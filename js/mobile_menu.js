const closeButton = document.querySelector('#close-mobile-menu')
const rightContainer = document.querySelector('.mobile-menu-container--right');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileMenuHamburger = document.querySelector('#open-mobile-menu-1')
const mobileMenuHamburgerHero = document.querySelector('#open-mobile-menu-2');
let isOnMenu = false;


closeButton.addEventListener('click', () => {
  console.log('dev1')
  mobileMenuContainer.classList.add('mobile-menu-container--off');
  rightContainer.classList.add('mobile-menu-container--right--off');

  console.log('dev2')

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});

mobileMenuHamburger.addEventListener('click', (ev) => {
  ev.stopPropagation();
  console.log('1');
  console.log(mobileMenuContainer.classList.toggle('mobile-menu-container--off'));
  rightContainer.classList.toggle('mobile-menu-container--right--off');
  console.log('2')

  console.log(mobileMenuContainer)
  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});

mobileMenuHamburgerHero.addEventListener('click', () => {
  console.log('4')
  mobileMenuContainer.classList.toggle('mobile-menu-container--off');
  rightContainer.classList.toggle('mobile-menu-container--right--off');
  console.log('5')

  setTimeout(() => {
    isOnMenu = !isOnMenu;
  }, 500);
});