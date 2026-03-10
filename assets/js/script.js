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

/*========== skills diagonal stagger animation ==========*/
const skillsAbortControllers = new WeakMap();

function getSkillsColumns(listEl) {
    const items = listEl.querySelectorAll('.skills-item');
    if (items.length < 2) return 1;
    const firstTop = Math.round(items[0].getBoundingClientRect().top);
    let cols = 0;
    for (let i = 0; i < items.length; i++) {
        if (Math.round(items[i].getBoundingClientRect().top) === firstTop) {
            cols++;
        } else {
            break;
        }
    }
    return cols || 1;
}

function animateSkillCards(detail) {
    const list = detail.querySelector('.skills-list');
    const items = list.querySelectorAll('.skills-item');

    items.forEach(item => {
        const prev = skillsAbortControllers.get(item);
        if (prev) prev.abort();
        item.classList.remove('animate-in');
        item.style.removeProperty('--stagger-delay');
    });

    void list.offsetWidth;

    const cols = getSkillsColumns(list);
    const STEP = 0.08;

    items.forEach((item, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        const delayS = (row + col) * STEP;

        const ac = new AbortController();
        skillsAbortControllers.set(item, ac);

        item.style.setProperty('--stagger-delay', `${delayS}s`);
        item.classList.add('animate-in');

        item.addEventListener('animationend', () => {
            item.classList.remove('animate-in');
            item.style.removeProperty('--stagger-delay');
        }, { once: true, signal: ac.signal });
    });
}

const skillsBtns = document.querySelectorAll('.skills-btn');

skillsBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const skillDetails = document.querySelectorAll('.skills-detail');

        skillsBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        skillDetails.forEach(detail => detail.classList.remove('active'));
        skillDetails[idx].classList.add('active');

        animateSkillCards(skillDetails[idx]);
    });
});

/*========== skills section initial animation on scroll ==========*/
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const activeDetail = skillsSection.querySelector('.skills-detail.active');
            if (activeDetail) {
                animateSkillCards(activeDetail);
            }
        }
    });
}, { threshold: 0.15 });

skillsObserver.observe(skillsSection);

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
ScrollReveal().reveal('.home-img img, .projects-box, .contact-container', { origin: 'bottom' });
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