import { initMenuCollapsible, initMenuScroll } from './menu/side-menu';
import { initMobileMenu } from './menu/mobile-menu';
import { handleDarkLightModes } from './dark-mode';
// import hljs from 'highlight.js';
import particles from 'mz-particles';

const initAnimation = () => {
  const $placeholder = document.getElementById('hp-animation');
  if(!$placeholder) return;

  particles({
    $placeholder,
    particlesNumber: 100,

    minSize: 10,
    maxSize: 30,

    particlesColors: [
      '#366d8c', '#368c8c', '#fffc00', '#92fae7',
      '#5daed2', '#366d8c'
    ],
    connectionColor: '#7fb2b7',

    // stars -------------
    svgPathData: [
      'm14.5 21.75-8.52289 4.48075 1.62773-9.49038-6.89516-6.72112 9.52888-1.38462L14.5 0l4.26144 8.63463 9.52888 1.38462-6.89516 6.72112 1.62773 9.49038z',
      'M14.5 21.75 4.24695 24.75305 7.25 14.5 4.24695 4.24695 14.5 7.25l10.25305-3.00305L21.75 14.5l3.00305 10.25305z',
      'm14.5 21.75-5.54891 6.14625.42239-8.26973-8.26973.42239L7.25 14.5 1.10375 8.95109l8.26973.42239-.42239-8.26973L14.5 7.25l5.54891-6.14625-.42239 8.26973 8.26973-.42239L21.75 14.5l6.14625 5.54891-8.26973-.42239.42239 8.26973z',
    ],

    // effects ------------
    rotate: true,
    // fadeInOut: true,

    // scale effect -------
    scaleInOut: true,
    maxScale: 1.2,
    minScale: 0.7,
    scaleStep: 0.005,
  });
};

const init = () => {
  const $special = document.getElementById('special-page');
  if($special) {
    initAnimation();

    /*if(hljs){
      hljs.highlightAll();
    }*/
    return;
  }

  initMobileMenu();
  initMenuScroll();
  initMenuCollapsible();
  handleDarkLightModes();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};
