const hamburger = document.getElementById('mobile-nav');
const navUl = document.getElementById('mobile-nav-tog');
const cancelBut = document.getElementById('cancel-butt');
const cancelBut1 = document.getElementById('cancel1-butt');
const cancelBut2 = document.getElementById('cancel2-butt');
const cancelBut3 = document.getElementById('cancel3-butt');
const popBut = document.querySelectorAll('#pop-button-1');
const popUl = document.querySelectorAll('#pop-proj-1-back');

hamburger.addEventListener('click', () => {
  navUl.classList.add('active');
});
cancelBut.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut1.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut2.addEventListener('click', () => {
  navUl.classList.remove('active');
});
cancelBut3.addEventListener('click', () => {
  navUl.classList.remove('active');
});



popBut[0].addEventListener('click', () => {
  popUl[0].classList.add('pop-active');
});