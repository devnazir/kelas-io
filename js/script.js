const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'menu-toggle' || e.target.className == 'menu-toggle close') {
        e.target.parentElement.children[1].classList.toggle('nav-open');
        if (e.target.parentElement.children[1].classList.contains('nav-open')) {
            e.target.classList.add('close');
            document.body.style.overflowY = 'hidden';
        } else {
            e.target.classList.remove('close');
            document.body.style.overflowY = 'visible';
        }
    }
});