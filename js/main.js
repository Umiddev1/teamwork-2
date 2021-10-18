"use strict"
let headerButton = document.querySelector('.header__btn');
let headerButtonFirstLine = document.querySelector('.first-line');
let headerButtonSecondLine = document.querySelector('.second-line');
let headerButtonThirdLine = document.querySelector('.third-line');
let headerNav = document.querySelector('.header__nav');


headerButton.addEventListener('click', function(){
    headerButtonFirstLine.classList.toggle('first-line--active');
    headerButtonSecondLine.classList.toggle('second-line--active');
    headerButtonThirdLine.classList.toggle('third-line--active');
    headerNav.classList.toggle('nav--active');
});