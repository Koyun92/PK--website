const burgerBtn = document.querySelector('.nav__burger-icon');
const menuBox = document.querySelector('.nav__box')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    menuBox.classList.toggle('nav__box--active')
})