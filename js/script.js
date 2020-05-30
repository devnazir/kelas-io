const menuToggle = document.querySelector('header nav .menu-toggle');
const li = document.querySelectorAll('header nav ul li a');
const kotakFitur = document.querySelectorAll('.fitur-list .kotak');

function menuToggleOpen() {
	this.classList.toggle('close');
	this.parentElement.children[1].classList.toggle('nav-open');
	if (this.parentElement.children[1].classList.contains('nav-open')) {
		this.parentElement.parentElement.parentElement.style.backgroundColor = 'white';
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'visible';
	}
}
menuToggle.addEventListener('click', menuToggleOpen);

function menuToggleClose() {
	document.body.style.overflowY = 'visible';
	this.parentElement.parentElement.classList.remove('nav-open');
	this.parentElement.parentElement.nextElementSibling.classList.remove('close');
}
li.forEach(link => { link.addEventListener('click', menuToggleClose) });

function loading(){
	let overlay = document.querySelector('.overlay');
	overlay.style.display = 'none';
}
window.addEventListener('load', loading);

function animasiKotak(){
	this.style.transform = 'scale(1.1)';
	this.style.transition = '.3s';
	this.addEventListener('mouseleave', () => {
		this.style.transform = 'scale(1)';
	});
}
kotakFitur.forEach(kotak => {
	kotak.addEventListener('mouseenter', animasiKotak)
});