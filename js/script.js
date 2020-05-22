const menuToggle = document.querySelector('header nav .menu-toggle');
menuToggle.addEventListener('click', function () {
	menuToggle.classList.toggle('close');
	menuToggle.parentElement.children[1].classList.toggle('nav-open');
	if(menuToggle.parentElement.children[1].classList.contains('nav-open')){
		menuToggle.parentElement.parentElement.parentElement.style.backgroundColor = 'white';
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'visible';
	}
});

// window.addEventListener('scroll', function () {
// 	let wScroll = window.scrollY;
// 	console.log(wScroll)
// 	const navbar = document.querySelector('header nav');
// 	if (wScroll > 450) {
// 		navbar.classList.add('setNav');
// 	} else if (wScroll <= 450) {
// 		navbar.classList.remove('setNav');
// 	}
// });

window.addEventListener('load', function(){
	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'none';
});

