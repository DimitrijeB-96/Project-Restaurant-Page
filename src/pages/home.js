const homePage = document.createElement('div');

const heroDiv = document.createElement('div');
const heroH2 = document.createElement('h2');
const heroText = document.createElement('p');
const heroSpan = document.createElement('span');

const contentDiv = document.createElement('div');
const contentH2 = document.createElement('h2');
const contentText = document.createElement('p');

function displayHeroDiv() {
  homePage.appendChild(heroDiv);
  heroDiv.classList.add('hero-div-home');

  heroDiv.appendChild(heroH2);
  heroH2.textContent = 'Welcome to Horizon';
  heroDiv.appendChild(heroText);
  heroSpan.textContent = 'VIEW';
  heroSpan.classList.add('bold');
  heroText.textContent = 'Restaurant with the best ';
  heroText.appendChild(heroSpan);
}

function displayContentDiv() {
  homePage.appendChild(contentDiv);
  contentDiv.classList.add('content-div-home');

  contentDiv.appendChild(contentH2);
  contentH2.textContent = 'Our Story';
  contentDiv.appendChild(contentText);
  contentText.textContent = 'Welcome to our restaurant...';
}

export function displayHomePage() {
  displayHeroDiv();
  displayContentDiv();
  homePage.classList.add('home');
}

export default homePage;


