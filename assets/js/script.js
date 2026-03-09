/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

const skillsBtns = document.querySelectorAll('.skills-btn');

skillsBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const skillDetails = document.querySelectorAll('.skills-detail');

        skillsBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        skillDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        skillDetails[idx].classList.add('active');
    });
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/*========== scroll reveal ==========*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .projects-box, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Education timeline sequential animation
ScrollReveal().reveal('.timeline-item:nth-child(1)', {
    origin: 'bottom',
    delay: 300,
    distance: '50px'
});
ScrollReveal().reveal('.timeline-item:nth-child(2)', {
    origin: 'bottom',
    delay: 900,
    distance: '50px'
});