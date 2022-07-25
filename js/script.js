

// 1 Вариант

// const userLogo = document.querySelector('.header__logo');
// const menuObj = document.querySelector('.menu');
// const header = document.querySelector('.header');
// const userName = document.querySelector('.header__user-name');
// const burger = document.querySelector('.header__burger');



// userLogo.addEventListener("click", function (e) {
//     menuObj.classList.add('_active');
//     header.classList.add('_active');
//     userName.classList.add('_active');
//     burger.classList.add('_active');
// });

// burger.addEventListener("click", function (e) {
//     burger.classList.remove('_active');
//     header.classList.remove('_active');
//     userName.classList.remove('_active');
//     menuObj.classList.remove('_active');
// });


// const menuItem = document.querySelectorAll('.menu__item');
// menuItem.forEach(function (menuItem) {
//     menuItem.addEventListener("click", function (e) {
//         menuItem.firstElementChild.classList.toggle('_active');
//         menuItem.lastElementChild.classList.toggle('_active');
//     });
// });


// 2 Вариант через делегирование событий 

const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
// const menuItems = document.querySelectorAll('.menu__item');



const blockText = document.querySelector('.block__text');

document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.header__logo')) {
        menu.classList.add('_active');
        header.classList.add('_active');
        burger.classList.add('_active');
    }
    if (targetElement.closest('.header__burger')) {
        menu.classList.remove('_active');
        header.classList.remove('_active');
        burger.classList.remove('_active');
    }

    if (targetElement.closest('.menu__item')) {
        targetElement.closest('.menu__item').lastElementChild.classList.toggle('_active');
        targetElement.closest('.menu__item').firstElementChild.classList.toggle('_active');
    }

    if (targetElement.closest('.block__button')) {
        blockText.classList.add('_active');
    } else {
        blockText.classList.remove('_active');
    }
});
