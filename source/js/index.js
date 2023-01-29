const menuButtonOpen = document.querySelector('#header-menu-button');
const mobileMenu = document.querySelector('#header-menu');

console.log(`menuButtonOpen: `, menuButtonOpen);
console.log(`mobileMenu: `, mobileMenu);

menuButtonOpen.classList.remove('main-header__button-nojs');
mobileMenu.classList.remove('main-header__menu-nojs');

menuButtonOpen.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  menuButtonOpen.classList.toggle('main-header__button-active');
});
