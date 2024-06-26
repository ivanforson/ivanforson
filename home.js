// Change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// Contact buttons (circular text)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(button => {
    let text = button.querySelector('p');
    if (text) {
        text.innerHTML = text.innerHTML.split('').map((character, index) => 
            `<span style="display: inline-block; transform: rotate(${index * 12}deg);">${character}</span>`
        ).join('');
    }
});

const navToggleOpen = document.getElementById('nav__toggle-open');
const navToggleClose = document.getElementById('nav__toggle-close');
const navLinks = document.querySelector('.nav__links');

navToggleOpen.addEventListener('click', () => {
    navLinks.classList.add('show-nav-links');
    navToggleOpen.style.display = 'none';
    navToggleClose.style.display = 'block';
});

navToggleClose.addEventListener('click', () => {
    navLinks.classList.remove('show-nav-links');
    navToggleOpen.style.display = 'block';
    navToggleClose.style.display = 'none';
});

const swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
});
