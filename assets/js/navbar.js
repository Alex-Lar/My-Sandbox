const burgerBtn = document.querySelector('.hamburger');
const [redBtn, blueBtn] = document.querySelectorAll('.radio-item');

redBtn.addEventListener('click', function() {
    if (!redBtn.classList.contains('red')) {
        redBtn.classList.add('red');
    }
    if (blueBtn.classList.contains('blue')) {
        blueBtn.classList.remove('blue');
    }
});

blueBtn.addEventListener('click', function() {
    if (!blueBtn.classList.contains('blue')) {
        blueBtn.classList.add('blue');
    }
    if (redBtn.classList.contains('red')) {
        redBtn.classList.remove('red');
    }
});


burgerBtn.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('hide');
    navMenu.classList.toggle('show');
});
