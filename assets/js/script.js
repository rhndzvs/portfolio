/*========== sticky navbar ==========*/
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
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