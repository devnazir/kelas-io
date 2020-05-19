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

window.document.addEventListener('scroll', function () {
	let wScroll = window.scrollY;
	const navbar = document.querySelector('header nav');
	if (wScroll > 700) {
		navbar.classList.add('setNav');
	} else if (wScroll <= 700) {
		navbar.classList.remove('setNav');
	}
});


var overlay = document.getElementById("overlay"); /* untuk mengambil elemen berdasarkan id yang ada id html */
 
window.addEventListener('load', function()
{
	overlay.style.display = 'none';
})