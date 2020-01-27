// elements animation
import anime from 'animejs/lib/anime.es.js';

$('.stagger-fade')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-in')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-up')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-up-reverse')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-down')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-down-reverse')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-left')
  .children()
  .addClass('stagger fade');

$('.stagger-fade-right')
  .children()
  .addClass('stagger fade');

var $window = $(window);

function check_if_in_view() {
  var $fade = $('.fade');

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($fade, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position + 50 <= window_bottom_position
    ) {
      $element.addClass('in-view');
    }
  });

  $('.in-view').css({
    opacity: '1',
    transform: 'translate(0, 0)',
    visibility: 'visible',
  });
}

const accordionItems = document.querySelectorAll('.lib-accordion--item');
let accordionShowAnimations = [];
let accordionHideAnimations = [];

function handleAccordionClick(e) {
  const accordionItem = e.currentTarget;
  const button = accordionItem.querySelector('.lib-accordion--title');
  const content = accordionItem.querySelector('.lib-accordion--content');
  const ariaValue = button.getAttribute('aria-selected');
  const contentNum = content.dataset.box;

  function showAccordion() {
    accordionShowAnimations[contentNum].play();
  }

  function hideAccordion() {
    accordionHideAnimations[contentNum].play();
  }

  if (ariaValue === 'false') {
    accordionItem.classList.add('js-open');
    button.setAttribute('aria-selected', true);
    content.setAttribute('aria-expanded', true);
    showAccordion();
  } else {
    accordionItem.classList.remove('js-open');
    button.setAttribute('aria-selected', false);
    content.setAttribute('aria-expanded', false);
    hideAccordion();
  }
}

accordionItems.forEach(item => {
  const contentEl = item.querySelector('.lib-accordion--content');
  const contentNum = contentEl.dataset.box;
  const contentHeight = anime.get(contentEl, 'height', 'px');
  anime.set(contentEl, { height: 0 });

  accordionShowAnimations[contentNum] = anime({
    targets: contentEl,
    height: contentHeight,
    autoplay: false,
    easing: 'linear',
    duration: 100,
  });

  accordionHideAnimations[contentNum] = anime({
    targets: contentEl,
    height: 0,
    autoplay: false,
    easing: 'linear',
    duration: 500,
  });

  item.addEventListener('click', handleAccordionClick);
});

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
