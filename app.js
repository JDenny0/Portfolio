const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const tilt = document.querySelector('.welcome-section');
    var navLinks = document.querySelectorAll('.nav-links li');
    const up = document.querySelector('.portfolio-img');
    const headerUp = document.querySelector('.header');
    const navUp = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // toogle nav
        up.classList.toggle('picture-up');
        nav.classList.toggle('nav-active');
        tilt.classList.toggle('section-down');
        headerUp.classList.toggle('header-up');
        navUp.classList.toggle('nav-up');
        nav.classList.toggle('d-none');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
            }

        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();


const portfolioItems = document.querySelectorAll('.portfolio-item')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})
// wellcome section word changing

const txtSpan = document.querySelector('.txtChange');
const wordsArray = ["Hello,", "Hi there,", "How’s it going?", "What's up?,", "Wellcome,", "'Sup?", "What’s new?"];
const typeSpeed = 100;
const eraseSpeed = 50;
const newTextSpeed = 3000;
let txtIndex = 0;
let characterIndex = 0;

function writing() {
    if (characterIndex < wordsArray[txtIndex].length) {
        txtSpan.textContent += wordsArray[txtIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(writing, typeSpeed);
    } else {
        setTimeout(erase, newTextSpeed);
    }
}
function erase() {
    if (characterIndex > 0) {
        txtSpan.textContent = wordsArray[txtIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(erase, eraseSpeed);

    } else {
        txtIndex++;
        if (txtIndex >= wordsArray.length) txtIndex = 0;
        setTimeout(writing, typeSpeed + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(writing, newTextSpeed + 250);
})


