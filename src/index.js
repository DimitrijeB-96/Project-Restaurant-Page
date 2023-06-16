import './style.css';
import header, { displayHeader, navHome, navMenu, navAboutUs } from './header.js';
import homePage, { displayHomePage } from './pages/home.js';
import menuPage, { displayMenuPage, isPageLoaded as menuLoaded } from './pages/menu.js';
import aboutUsPage, { displayAboutUsPage } from './pages/aboutUs.js';

const content = document.createElement('div');

let currentPage = menuPage;

navHome.addEventListener('click', displayHome);
navMenu.addEventListener('click', displayMenu);
navAboutUs.addEventListener('click', displayAboutUs);

function displayHome() {
  menuLoaded = false;
  if (currentPage === menuPage) {
    content.removeChild(menuPage);
  } else if (currentPage === aboutUsPage) {
    content.removeChild(aboutUsPage);
  }
  content.appendChild(homePage);
  currentPage = homePage;
  displayHomePage();
}

function displayMenu() {
  if (menuLoaded === true) {
    return;
  } else if (currentPage === homePage) {
    content.removeChild(homePage);
  } else if (currentPage === aboutUsPage) {
    content.removeChild(aboutUsPage);
  } 
  content.appendChild(menuPage);
  currentPage = menuPage;
  menuLoaded = true;
}

function displayAboutUs() {
  menuLoaded = false;
  if (currentPage === homePage) {
    content.removeChild(homePage);
  } else if (currentPage === menuPage) {
    content.removeChild(menuPage);
  }
  content.appendChild(aboutUsPage);
  currentPage = aboutUsPage;
  displayAboutUsPage();
}

// Use to display Header and Content part of the page
function displayToDom() {
  document.body.appendChild(header);
  displayHeader();
  document.body.appendChild(content);
  content.classList.add('content');

  content.appendChild(currentPage);
  //displayHomePage();
  displayMenuPage();
}

displayToDom();

