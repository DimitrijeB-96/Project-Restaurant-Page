const header = document.createElement('div');

const logoDiv = document.createElement('div');
const logo = document.createElement('h1');

const navDiv = document.createElement('div');
const navUl = document.createElement('ul');

const navHome = document.createElement('li');
const navMenu = document.createElement('li');
const navAboutUs = document.createElement('li');

function headerLogo() {
  logoDiv.classList.add('logo-div');
  logoDiv.appendChild(logo);

  logo.textContent = 'Horizon';
}

function homeBtn() {
  navHome.textContent = 'Home';
  navHome.setAttribute('id', 'home');
  navUl.appendChild(navHome);
}

function menuBtn() {
  navMenu.textContent = 'Menu';
  navMenu.setAttribute('id', 'menu');
  navUl.appendChild(navMenu);
}

function aboutUsBtn() {
  navAboutUs.textContent = 'About Us';
  navAboutUs.setAttribute('id', 'aboutUs');
  navUl.appendChild(navAboutUs);
}

function headerNav() {
  navDiv.classList.add('nav-div');

  navDiv.appendChild(navUl);
  homeBtn();
  menuBtn();
  aboutUsBtn();
}

export function displayHeader() {
  header.classList.add('header');
  headerLogo();
  headerNav();
  header.append(logoDiv, navDiv);
}

export default header;
export {
  navHome,
  navMenu,
  navAboutUs
};