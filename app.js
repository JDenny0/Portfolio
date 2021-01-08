const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const tilt = document.querySelector('.welcome-section');
  const navLinks = document.querySelectorAll('.nav-links li');
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

portfolioItems.forEach(portfolioItem =>{
   portfolioItem.addEventListener('mouseover', () => {
       portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', () => {
       portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})
