/* global window */
import registerComponents from 'boot/registerComponents';
import registerRoutes from 'boot/registerRoutes';

window.document.addEventListener('DOMContentLoaded', () => {
  registerRoutes();
  registerComponents();
});
