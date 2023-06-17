import './style.css';
import header, { displayHeader, navHome, navMenu, navAboutUs } from './header.js';
import homePage, { displayHomePage, isPageLoaded as homeLoaded } from './pages/home.js';
import menuPage, { displayMenuPage, isPageLoaded as menuLoaded } from './pages/menu.js';
import aboutUsPage, { displayAboutUsPage, isPageLoaded as aboutUsLoaded } from './pages/aboutUs.js';

const content = document.createElement('div');

let currentPage = homePage;

navHome.addEventListener('click', displayPage);
navMenu.addEventListener('click', displayPage);
navAboutUs.addEventListener('click', displayPage);

function displayPage(e) {
  if (e.target.id === 'home') {
    
    if (homeLoaded === true) {
      console.log('nothing home');
      return;
    } else {
      if (menuLoaded === true) {
        content.removeChild(menuPage);
      } else if (aboutUsLoaded === true) {
        content.removeChild(aboutUsPage);
      }
      homeLoaded = true;
      menuLoaded = false;
      aboutUsLoaded = false;
      currentPage = homePage;
      displayHomePage();
      content.appendChild(homePage);
    }

  } else if (e.target.id === 'menu') {

    if (menuLoaded === true) {
      console.log('nothing menu');
      return;
    } else {
      if (homeLoaded === true) {
        content.removeChild(homePage);
      } else if (aboutUsLoaded === true) {
        content.removeChild(aboutUsPage);
      }
      homeLoaded = false;
      menuLoaded = true;
      aboutUsLoaded = false;
      currentPage = menuPage;
      displayMenuPage();
      content.appendChild(menuPage);
    }

  } else if (e.target.id === 'aboutUs') {

    if (aboutUsLoaded === true) {
      console.log('nothing about');
      return;
    } else {
      if (homeLoaded === true) {
        content.removeChild(homePage);
      } else if (menuLoaded === true) {
        content.removeChild(menuPage);
      }
      homeLoaded = false;
      menuLoaded = false;
      aboutUsLoaded = true;
      currentPage = aboutUsPage;
      displayAboutUsPage();
      content.appendChild(aboutUsPage);
    }

  }
}

// Use to display Header and Content part of the page
function displayToDom() {
  document.body.appendChild(header);
  displayHeader();
  content.classList.add('content');
  document.body.appendChild(content);
  
  content.appendChild(currentPage);
  displayHomePage();
  homeLoaded = true;
}

displayToDom();

