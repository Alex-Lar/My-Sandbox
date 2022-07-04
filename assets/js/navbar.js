function toggleNavs() {
    const burgerBtn = document.querySelector('.hamburger');
    const firstNavbar = document.querySelector('#navbar-first');
    const secondNavbar = document.querySelector('#navbar-second');
    const [firstNavBtn, secondNavBtn] = document.querySelectorAll('.radio-item');


    burgerBtn.addEventListener('click', function () {
        const navMenu = document.querySelector('.nav__menu');

        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('hide');
        navMenu.classList.toggle('show');
    });

    firstNavBtn.addEventListener('click', function () {
        if (!secondNavbar.classList.contains('d-none')) {
            secondNavbar.classList.add('d-none');
            if (firstNavbar.classList.contains('d-none')) {
                firstNavbar.classList.remove('d-none');
            }
        }

        if (!firstNavBtn.classList.contains('red')) {
            firstNavBtn.classList.add('red');
            if (secondNavBtn.classList.contains('blue')) {
                secondNavBtn.classList.remove('blue');
            }
        }
    });

    secondNavBtn.addEventListener('click', function () {
        if (!firstNavbar.classList.contains('d-none')) {
            firstNavbar.classList.add('d-none');
            if (secondNavbar.classList.contains('d-none')) {
                secondNavbar.classList.remove('d-none');
            }
        }

        if (!secondNavBtn.classList.contains('blue')) {
            secondNavBtn.classList.add('blue');
            if (firstNavBtn.classList.contains('red')) {
                firstNavBtn.classList.remove('red');
            }
        }
    });
}
toggleNavs();



function menuDropdown() {
    const blogBtn = document.querySelector('.blog');
    const workBtn = document.querySelector('.work');
    const blogDrop = document.querySelector('#blog-dropdown');
    const workDrop = document.querySelector('#work-dropdown');

    blogBtn.addEventListener('click', function (e) {
        e.preventDefault();
        blogDrop.classList.toggle('d-none');

        if (!workDrop.classList.contains('d-none')) {
            workDrop.classList.toggle('d-none');
        }
    });

    workBtn.addEventListener('click', function (e) {
        e.preventDefault();
        workDrop.classList.toggle('d-none');

        if (!blogDrop.classList.toggle('d-none')) {
            blogDrop.classList.toggle('d-none');
        }
    });
}
menuDropdown();