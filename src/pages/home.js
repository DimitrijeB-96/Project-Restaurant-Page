const homePage = document.createElement('div');

let isPageLoaded = false;

const heroDiv = document.createElement('div');
const heroH2 = document.createElement('h2');
const heroText = document.createElement('p');
const heroSpan = document.createElement('span');

const contentDiv = document.createElement('div');
const contentH2First = document.createElement('h2');
const contentTextIntro = document.createElement('p');
const contentH2Second = document.createElement('h2');
const contentText1 = document.createElement('p');
const contentText2 = document.createElement('p');
const contentText3 = document.createElement('p');

function displayHeroDiv() {
  homePage.appendChild(heroDiv);
  heroDiv.classList.add('hero-div-home');

  heroH2.textContent = 'Welcome to Horizon';
  heroSpan.textContent = 'VIEW';
  heroSpan.classList.add('bold');
  heroText.textContent = 'Restaurant with the best ';

  heroDiv.append(heroH2,heroText);
  heroText.appendChild(heroSpan);
  
}

function displayContentDiv() {
  homePage.appendChild(contentDiv);
  contentDiv.classList.add('content-div-home');

  contentH2First.textContent = 'Our Story';
  contentTextIntro.textContent = 'Horizon opened in 1988 with the goal of providing traditional homemade meals, with the emphasis on quality.';
  contentH2Second.textContent = 'Visit Us';
  contentText1.textContent = 'At Horizon, we offer local Greek cuisine and traditional flavors that you can only eat at our restaurant in Santorini.';
  contentText2.textContent = 'With great food you can enjoy the best Greek wine from local Wineyards, to bring richnest and color to your food.';
  contentText3.textContent = 'To top it all up, we offer best views on the island, there is no excuse not to visit us!';
  contentDiv.append(contentH2First, contentTextIntro, contentH2Second, contentText1, contentText2, contentText3)
}

export function displayHomePage() {
  displayHeroDiv();
  displayContentDiv();
  homePage.classList.add('home');
}

export default homePage;

export {
  isPageLoaded
}


