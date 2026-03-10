'use strict';

/* 1. NAVBAR */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

/** Toggle mobile menu open / closed. */
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/** On scroll: highlight active nav link, stick header, close mobile menu. */
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky header
    header.classList.toggle('sticky', scrollY > 100);

    // Active nav link based on current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));

            const matchingLink = document.querySelector(`header nav a[href*="${sectionId}"]`);
            if (matchingLink) matchingLink.classList.add('active');
        }
    });

    // Auto-close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/* 2. DARK / LIGHT MODE */

const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

/* 3. SKILLS — Tab Switching + Diagonal Stagger Animation */

const skillsSection = document.querySelector('#skills');
const skillsBtns = document.querySelectorAll('.skills-btn');
const skillsDetails = document.querySelectorAll('.skills-detail');
const skillsCategoryBox = skillsSection.querySelector('.skills-box.category');

/** Tracks per-item AbortControllers so animations can be cancelled mid-flight. */
const skillsAbortControllers = new WeakMap();

/**
 * Counts how many skill cards share the same top position (= number of columns).
 * @param {Element} listEl - The .skills-list container element.
 * @returns {number}
 */
function getSkillsColumns(listEl) {
    const items = listEl.querySelectorAll('.skills-item');
    if (items.length < 2) return 1;

    const firstTop = Math.round(items[0].getBoundingClientRect().top);
    let cols = 0;

    for (const item of items) {
        if (Math.round(item.getBoundingClientRect().top) === firstTop) {
            cols++;
        } else {
            break;
        }
    }

    return cols || 1;
}

/**
 * Plays the diagonal stagger animation on all cards inside a skills detail panel.
 * @param {Element} detail - The active .skills-detail element.
 */
function animateSkillCards(detail) {
    const list = detail.querySelector('.skills-list');
    const items = list.querySelectorAll('.skills-item');

    // Cancel any running animations and reset state
    items.forEach(item => {
        const prevController = skillsAbortControllers.get(item);
        if (prevController) prevController.abort();
        item.classList.remove('animate-in');
        item.style.removeProperty('--stagger-delay');
    });

    // Force reflow so CSS transitions restart cleanly
    void list.offsetWidth;

    const cols = getSkillsColumns(list);
    const STAGGER_STEP = 0.08; // seconds between diagonal waves

    items.forEach((item, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        const delay = (row + col) * STAGGER_STEP;

        const controller = new AbortController();
        skillsAbortControllers.set(item, controller);

        item.style.setProperty('--stagger-delay', `${delay}s`);
        item.classList.add('animate-in');

        item.addEventListener(
            'animationend',
            () => {
                item.classList.remove('animate-in');
                item.style.removeProperty('--stagger-delay');
            },
            { once: true, signal: controller.signal }
        );
    });
}

/** Switch active skills tab and trigger card animation. */
skillsBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        skillsBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        skillsDetails.forEach(detail => detail.classList.remove('active'));
        skillsDetails[idx].classList.add('active');

        animateSkillCards(skillsDetails[idx]);
    });
});

/** Animate skills section when it enters the viewport. */
const skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsCategoryBox?.classList.add('animate-in');

                const activeDetail = skillsSection.querySelector('.skills-detail.active');
                if (activeDetail) animateSkillCards(activeDetail);
            } else {
                // Reset so the animation replays when scrolling back
                skillsCategoryBox?.classList.remove('animate-in');
            }
        });
    },
    { threshold: 0.15 }
);

skillsObserver.observe(skillsSection);

/* 4. SCROLL REVEAL */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .projects-box, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// Education timeline — staggered sequential reveal
ScrollReveal().reveal('.timeline-item:nth-child(1)', { origin: 'bottom', delay: 300, distance: '50px' });
ScrollReveal().reveal('.timeline-item:nth-child(2)', { origin: 'bottom', delay: 500, distance: '50px' });