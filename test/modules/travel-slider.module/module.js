let isDown = false;
let startX;
let scrollLeft;
let lastScrollLeft = 0;
const slider = document.querySelector('.items');
const cards = document.querySelectorAll('.cards');

const end = () => {
    isDown = false;
    slider.classList.remove('active');
};

const start = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
};

const highlightCard = (e) => {
    cards.forEach(card => card.classList.remove('clicked'));
    e.target.closest('.cards').classList.add('clicked');
};

const checkScrollDirection = () => {
    if (slider.scrollLeft > lastScrollLeft) {
        slider.classList.remove('scrolling-back');
        slider.classList.add('scrolling-forward');
    } else {
        slider.classList.remove('scrolling-forward');
        slider.classList.add('scrolling-back');
    }
    lastScrollLeft = slider.scrollLeft;
};

const updateActiveCard = () => {
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const sliderRect = slider.getBoundingClientRect();
        if (cardRect.left >= sliderRect.left && cardRect.right <= sliderRect.right) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
};

(() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);

    cards.forEach(card => card.addEventListener('click', highlightCard));
    slider.addEventListener('scroll', () => {
        checkScrollDirection();
        updateActiveCard();
    });
})();


// navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
