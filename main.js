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