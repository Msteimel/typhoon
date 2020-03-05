// elements animation
import SmoothScroll from 'smooth-scroll';
import { navHighlight } from './nav-highlight.js';
import * as accordion from './accordion.js';
import { mobileNavAnimation } from './mobile-nav.js';

var scroll = new SmoothScroll('a[href*="#"]');

// adds highlight to current page in nav
navHighlight;

// accordion
accordion;

// mobile trigger
mobileNavAnimation();

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
