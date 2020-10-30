// scroll-effect
const scrolling = new SmoothScroll('a[href*="#"]', {
  speed: 600
});

// event listener scroll navbar
const mainNavLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= (fromTop + 80) &&
      section.offsetTop + section.offsetHeight > (fromTop + 80)
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

const navSlide = () => {
  // get all elements
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav ul li');
  const container = document.querySelector('.container');

  // close nav-menu on click outside
  container.addEventListener('click', () => {
    if (nav.classList.value.includes('nav-active')) {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      navLinks.forEach((link) => {
        if (link.style.animation) {
          link.style.animation = '';
        }
      });
    }
  });

  // toggle nav menu open when clicking the burger icon
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.1}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();