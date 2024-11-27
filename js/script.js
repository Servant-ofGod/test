"use strict";

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

// Відкриття/закриття меню при натисканні на іконку
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Закриття меню при натисканні на пункт меню
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", () => {
			document.body.classList.remove('_lock');
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		});
	});
}

// Закриття меню при натисканні на вільний простір
document.addEventListener("click", (e) => {
	if (!menuBody.contains(e.target) && !iconMenu.contains(e.target)) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	}
});








// "use strict"


// // меню-бургер-2
// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');
// if (iconMenu) {

// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 	});
// }



// // плавна навігація
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;



// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}






// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();

// 		}
// 	}
// }
