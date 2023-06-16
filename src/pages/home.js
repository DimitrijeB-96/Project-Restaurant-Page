const homePage = document.createElement('div');

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

  contentDiv.appendChild(contentH2First);
  contentH2First.textContent = 'Our Story';
  contentDiv.appendChild(contentTextIntro);
  
  contentTextIntro.textContent = 'Horizon opened in 1988 with the goal of providing traditional homemade meals, with the emphasis on quality.';
  contentDiv.appendChild(contentH2Second);
  contentDiv.appendChild(contentText1);
  contentDiv.appendChild(contentText2);
  contentDiv.appendChild(contentText3);
  contentH2Second.textContent = 'Visit Us';
  contentText1.textContent = 'At Horizon, we offer local Greek cuisine and traditional flavors that you can only eat at our restaurant in Santorini.';
  contentText2.textContent = 'With great food you can enjoy the best Greek wine from local Wineyards, to bring richnest and color to your food.';
  contentText3.textContent = 'To top it all up, we offer best views on the island, there is no excuse not to visit us!';
}

export function displayHomePage() {
  displayHeroDiv();
  displayContentDiv();
  homePage.classList.add('home');
}

export default homePage;

