// scroll-effect
const scrolling = new SmoothScroll('a[href*="#"]',
  {
    speed: 600
  });

// event listener scroll navbar
let scrollBool = false;
const mainNavLinks = document.querySelectorAll('nav ul li a');
const langSelector = document.querySelector('.language-picker');
document.addEventListener('scroll', function () {
  const fromTop = window.pageYOffset;
  if (mainNavLinks.length > 1) {
    mainNavLinks.forEach(function (link) {
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
  }
  let header = document.querySelector('header');
  let windowPosition = window.pageYOffset  > 0;
  if (scrollBool !== windowPosition) {
    scrollBool = windowPosition;
    header.classList.toggle('scrolling-active', windowPosition);
  }
});

function navSlide() {
  // get all elements
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav ul li');
  const container = document.querySelector('.container');

  // close nav-menu on click outside
  container.addEventListener('click', function () {
    if (nav.classList.value.includes('nav-active')) {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      langSelector.classList.toggle('toggle');
      navLinks.forEach(function (link) {
        if (link.style.animation) {
          link.style.animation = '';
        }
      });
    }
  });

  // toggle nav menu open when clicking the burger icon
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinkFade 0.4s ease forwards ' + (index / 7 + 0.1) + 's';
      }
    });
    burger.classList.toggle('toggle');
    langSelector.classList.toggle('toggle');
  });
}

// translate

function translate() {
  $("[data-localize]").localize("language", { language: "en" });
}

// language selector

document.getElementsByClassName('language__select')[0].addEventListener('change', function(e) {
  $("[data-localize]").localize("language", { language: e.target.value });
});

// image gallery

const elApp = document.querySelector("#app");

const elImages = Array.from(document.querySelectorAll(".project-gallery-image"));

const elDetail = document.querySelector(".detail");

function flipImages(firstEl, lastEl, change) {
  const firstRect = firstEl.getBoundingClientRect();

  const lastRect = lastEl.getBoundingClientRect();

  // INVERT
  const deltaX = firstRect.left - lastRect.left;
  const deltaY = firstRect.top - lastRect.top;
  const deltaW = firstRect.width / lastRect.width;
  const deltaH = firstRect.height / lastRect.height;

  change();
  lastEl.parentElement.dataset.flipping = true;

  const animation = lastEl.animate([
    {
      transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
    },
    {
      transform: 'none'
    }
  ], {
    duration: 400, // milliseconds
    easing: 'cubic-bezier(.2, 0, .3, 1)'
  });

  animation.onfinish = () => {
    delete lastEl.parentElement.dataset.flipping;
  }

}

elImages.forEach(figure => {

  figure.addEventListener("click", () => {
    const elImage = figure.querySelector('img');

    elDetail.innerHTML = "";

    const elClone = figure.cloneNode(true);
    elDetail.appendChild(elClone);

    const elCloneImage = elClone.querySelector('img');

    flipImages(elImage, elCloneImage, ()=>{
      elApp.dataset.state="detail";
    });

    function revert(){

      flipImages(elCloneImage, elImage, ()=>{
        elApp.dataset.state="gallery";
        elDetail.removeEventListener('click',revert);
        document.removeEventListener('scroll', revert);
      });

    }

    document.addEventListener('scroll', revert);
    elDetail.addEventListener('click',revert);

  });
});




translate();
navSlide();
