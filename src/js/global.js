// elements animation
import anime from 'animejs/lib/anime.es.js';
import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]');

const showItems = document.querySelectorAll('.lib-show--item');
let showShowAnimations = [];
let showHideAnimations = [];

function handleshowClick(e) {
  const showItem = e.currentTarget;
  const button = showItem.querySelector('.lib-show--title');
  const content = showItem.querySelector('.lib-show--content');
  const ariaValue = button.getAttribute('aria-selected');
  const contentNum = content.dataset.box;

  function showshow() {
    showShowAnimations[contentNum].play();
  }

  function hideshow() {
    showHideAnimations[contentNum].play();
  }

  if (ariaValue === 'false') {
    showItem.classList.add('js-open');
    button.setAttribute('aria-selected', true);
    content.setAttribute('aria-expanded', true);
    showshow();
  } else {
    showItem.classList.remove('js-open');
    button.setAttribute('aria-selected', false);
    content.setAttribute('aria-expanded', false);
    hideshow();
  }
}

showItems.forEach(item => {
  const contentEl = item.querySelector('.lib-show--content');
  const contentNum = contentEl.dataset.box;
  const contentHeight = anime.get(contentEl, 'height', 'px');
  anime.set(contentEl, { height: 0 });

  showShowAnimations[contentNum] = anime({
    targets: contentEl,
    height: contentHeight,
    autoplay: false,
    easing: 'linear',
    duration: 100,
  });

  showHideAnimations[contentNum] = anime({
    targets: contentEl,
    height: 0,
    autoplay: false,
    easing: 'linear',
    duration: 500,
  });

  item.addEventListener('click', handleshowClick);
});

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
const navItems = document.querySelectorAll('.typhoon-side-nav--main-link');

navItems.forEach(link => {
  const currentURL = window.location.pathname;
  const getHREF = link.getAttribute('href');

  const cleanURL = currentURL.replace(/^\/|\/$/g, '');
  const cleanHREF = getHREF.replace(/^\/|\/$/g, '');

  if (cleanURL === cleanHREF) {
    link.classList.add('js-current');
  }
});
