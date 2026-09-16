/* Main Entry Point */
import { initNav } from './modules/nav.js';
import { initCoverageSearch } from './modules/coverage.js';
import { initFormValidation } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCoverageSearch();
  initFormValidation();

  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
