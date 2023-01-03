const menuButtonOpen = document.querySelector('#menu-button-open')
const menuButtonClose = document.querySelector('#menu-button-close')

const mobileMenu = document.querySelector('#mobile-menu');

console.log(`menuButtonOpen: `, menuButtonOpen);
console.log(`menuButtonClose: `, menuButtonClose);
console.log(`mobileMenu: `, mobileMenu);

menuButtonOpen.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

menuButtonClose.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});
