const menuToggle = document.querySelector('header nav .menu-toggle');
const li = document.querySelectorAll('header nav ul li a');

menuToggle.addEventListener('click', function () {
	this.classList.toggle('close');
	this.parentElement.children[1].classList.toggle('nav-open');
	if (this.parentElement.children[1].classList.contains('nav-open')) {
		this.parentElement.parentElement.parentElement.style.backgroundColor = 'white';
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'visible';
	}
});

li.forEach((link) => {
	link.addEventListener('click', function () {
		document.body.style.overflowY = 'visible';
		this.parentElement.parentElement.classList.remove('nav-open');
		this.parentElement.parentElement.nextElementSibling.classList.remove('close');
	});

});

window.addEventListener('load', function () {
	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'none';
});

