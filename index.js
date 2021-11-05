const hamburger = document.getElementById('mobile-nav');
const navUl = document.getElementById('mobile-nav-tog');
const cancelBut = document.getElementById('cancel-butt');

hamburger.addEventListener('click', () => {
    navUl.classList.add('active');
});

cancelBut.addEventListener('click', () => {
    navUl.classList.remove('active');
});