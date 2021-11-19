const hamburger = document.querySelector('#mobile-nav');
const navUl = document.querySelector('#mobile-nav-tog');
const navDeactivators = document.querySelectorAll('.nav-deactivator');

const removeActiveClass = () => {
  navUl.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  navUl.classList.add('active');
});
navDeactivators.forEach(navDeactivator => {
  navDeactivator.addEventListener('click', removeActiveClass);
});
