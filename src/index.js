import './reset.css';
import './style.css';
import {blocks} from './blocks.js';
import {homepage} from './homepage/homepage.js';
import { aboutUs } from './aboutUs/aboutUs.js';
import { menu } from './menu/menu.js';

const createPage = ( function() {
  
  function _init() {
    aboutUs.render();
  }

  _init();
})();


const mobileMenu = ( function() {

  // Cache DOM
  const hamburgerMenu = document.getElementById('hamburgerMenu');

  // Toogle mobile menu
  hamburgerMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    blocks.toggleElement('mobileMenuList', 'hideElement');
  }


})();