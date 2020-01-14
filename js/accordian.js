const accordionItems = document.querySelectorAll('.lib-accordion--item');

function handleAccordionClick(e) {
  const item = e.currentTarget;
  const content = item.querySelector('.lib-accordion--content');
  const ariaSelected = item.getAttribute('aria-selected');

  item.classList.toggle('js-open');
  // item.setAttribute('aria-selected', true);
}

accordionItems.forEach(item => {
  item.addEventListener('click', handleAccordionClick);
});

