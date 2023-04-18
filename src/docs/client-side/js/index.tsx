import { initMenuCollapsible, initMenuScroll } from './menu/side-menu';
import { initMobileMenu } from './menu/mobile-menu';
import { handleDarkLightModes } from './dark-mode';

const init = () => {
  const $special = document.getElementById('special-page');
  if($special) return;

  initMobileMenu();
  initMenuScroll();
  initMenuCollapsible();
  handleDarkLightModes();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};
