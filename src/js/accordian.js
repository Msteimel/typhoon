const accordionItems = document.querySelectorAll('.lib-accordion--item');

function handleAccordionClick(e) {
  const item = e.currentTarget;
  const content = item.querySelector('.lib-accordion--content');
  const ariaValue = item.getAttribute('aria-selected');

  if (ariaValue === 'false') {
    item.setAttribute('aria-selected', true);
    item.classList.add('js-open');
    content.setAttribute('aria-expanded', true);
  } else {
    item.setAttribute('aria-selected', false);
    item.classList.remove('js-open');
    content.setAttribute('aria-expanded', false);
  }
}

accordionItems.forEach(item => {
  item.addEventListener('click', handleAccordionClick);
});
