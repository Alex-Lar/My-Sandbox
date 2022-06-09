const burgerBtn = document.querySelector('.hamburger');

burgerBtn.addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('hide');
    navMenu.classList.toggle('show');
});