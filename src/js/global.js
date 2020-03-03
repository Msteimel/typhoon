// elements animation
import anime from 'animejs/lib/anime.es.js';
import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]');

const showItems = document.querySelectorAll('.lib-show--item');
let showAccordionAnimations = [];
let hideAccordionAnimations = [];

function handleAccordionClick(e) {
  const showItem = e.currentTarget;
  const button = showItem.querySelector('.lib-show--title');
  const content = showItem.querySelector('.lib-show--content');
  const ariaValue = button.getAttribute('aria-selected');
  const contentNum = content.dataset.box;

  function showAccordion() {
    showAccordionAnimations[contentNum].play();
  }

  function hideAccordion() {
    hideAccordionAnimations[contentNum].play();
  }

  if (ariaValue === 'false') {
    showItem.classList.add('js-open');
    button.setAttribute('aria-selected', true);
    content.setAttribute('aria-expanded', true);
    showAccordion();
  } else {
    showItem.classList.remove('js-open');
    button.setAttribute('aria-selected', false);
    content.setAttribute('aria-expanded', false);
    hideAccordion();
  }
}

showItems.forEach(item => {
  const contentEl = item.querySelector('.lib-show--content');
  const contentNum = contentEl.dataset.box;
  const contentHeight = anime.get(contentEl, 'height', 'px');
  anime.set(contentEl, { height: 0 });

  showAccordionAnimations[contentNum] = anime({
    targets: contentEl,
    height: contentHeight,
    autoplay: false,
    easing: 'linear',
    duration: 100,
  });

  hideAccordionAnimations[contentNum] = anime({
    targets: contentEl,
    height: 0,
    autoplay: false,
    easing: 'linear',
    duration: 500,
  });

  item.addEventListener('click', handleAccordionClick);
});

// adds highlight to current page in nav
const navList = document.querySelectorAll('.typhoon-side-nav--list');

navList.forEach(navCol => {
  const link = navCol.querySelector('.typhoon-side-nav--main-link');

  const currentURL = window.location.pathname;
  const getHREF = link.getAttribute('href');

  const cleanURL = currentURL.replace(/^\/|\/$/g, '');
  const cleanHREF = getHREF.replace(/^\/|\/$/g, '');

  if (cleanURL === cleanHREF) {
    navCol.classList.add('js-current');
  }
});

// mobile trigger

function mobileNavAnimation(e) {
  const sideNav = document.querySelector('.typhoon-side-nav--wrap');
  const mobileNavBtn = sideNav.querySelector('.typhoon-side-nav--mobile');
  const mobileNavEl = sideNav.querySelector('.typhoon-side-menu--wrap');
  const contentHeight = anime.get(mobileNavEl, 'height', 'px');
  anime.set(mobileNavEl, { height: 0 });

  function openMobileNav() {
    anime({
      targets: mobileNavEl,
      height: contentHeight,
      autoplay: false,
      easing: 'linear',
      duration: 200,
    }).play();
  }

  function closeMobileNav() {
    anime({
      targets: mobileNavEl,
      height: 0,
      autoplay: false,
      easing: 'linear',
      duration: 200,
    }).play();
  }

  function handleMobileNavClick(event) {
    const getAriaValue = mobileNavBtn.getAttribute('aria-expanded');
    const navLinks = sideNav.querySelectorAll('.typhoon-side-nav--sub-page');
    console.log(event.target);

    if (getAriaValue === 'false') {
      sideNav.classList.add('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', true);
      openMobileNav();
    } else if (event.target === navLinks) {
      sideNav.classList.remove('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', false);
      closeMobileNav();
    } else {
      sideNav.classList.remove('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', false);
      closeMobileNav();
    }
  }

  sideNav.addEventListener('click', handleMobileNavClick);
}

mobileNavAnimation();

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
