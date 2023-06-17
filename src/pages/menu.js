const menuPage = document.createElement('div');

let isPageLoaded = false;

function createMenus() {
  for (let i = 1; i < 6; i++) {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.classList.add('menu-div' + i);
    mainMenuDiv.classList.add('main-menu-div');
    menuPage.appendChild(mainMenuDiv);
  }
}

function createItem(name, ingredient, price) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div-menu');

  const nameAndIngredientDiv = document.createElement('div');
  nameAndIngredientDiv.classList.add('name-ingredient-div-menu');

  const itemName = document.createElement('h2');
  itemName.textContent = name;
  const itemIngredients = document.createElement('p');
  itemIngredients.textContent = ingredient;
  const itemPrice = document.createElement('h3');
  itemPrice.textContent = '€ ' + price;

  nameAndIngredientDiv.append(itemName, itemIngredients);
  itemDiv.append(nameAndIngredientDiv, itemPrice);

  return itemDiv;
}

function displayAppetizerMenuDiv() {
  const appetizerMenuDiv = document.querySelector('.menu-div1');
  const appetizerCover = document.createElement('div');
  appetizerCover.classList.add('cover-picture');
  appetizerCover.classList.add('appetizer-cover');

  appetizerMenuDiv.appendChild(appetizerCover);

  const appetizerTitle = document.createElement('h1');
  appetizerTitle.textContent = 'Appetizer';

  appetizerMenuDiv.appendChild(appetizerTitle);
  appetizerMenuDiv.appendChild(createItem('Dorucak', 'Prvo Drugo Trece Cetvrto', 4));
  appetizerMenuDiv.appendChild(createItem('Rucak', 'Prvo Drugo Trece Cetvrto', 6));
  appetizerMenuDiv.appendChild(createItem('Vecera', 'Prvo Drugo Trece Cetvrto', 5));
}

function displayMainCourseMenuDiv() {
  const mainCourseMenuDiv = document.querySelector('.menu-div2');
  const mainCourseCover = document.createElement('div');
  mainCourseCover.classList.add('cover-picture');
  mainCourseCover.classList.add('main-course-cover');

  mainCourseMenuDiv.appendChild(mainCourseCover);

  const mainCourseTitle = document.createElement('h1');
  mainCourseTitle.textContent = 'Main Course';

  mainCourseMenuDiv.appendChild(mainCourseTitle);
  mainCourseMenuDiv.appendChild(createItem('Dorucak', 'Prvo Drugo Trece Cetvrto', 4));
  mainCourseMenuDiv.appendChild(createItem('Rucak', 'Prvo Drugo Trece Cetvrto', 6));
  mainCourseMenuDiv.appendChild(createItem('Vecera', 'Prvo Drugo Trece Cetvrto', 5));
}

function displaySaladsMenuDiv() {
  const saladMenuDiv = document.querySelector('.menu-div3');
  const saladCover = document.createElement('div');
  saladCover.classList.add('cover-picture');
  saladCover.classList.add('salad-cover');

  saladMenuDiv.appendChild(saladCover);

  const saladMenuTitle = document.createElement('h1');
  saladMenuTitle.textContent = 'Salads';

  saladMenuDiv.appendChild(saladMenuTitle);
  saladMenuDiv.appendChild(createItem('Dorucak', 'Prvo Drugo Trece Cetvrto', 4));
  saladMenuDiv.appendChild(createItem('Rucak', 'Prvo Drugo Trece Cetvrto', 6));
  saladMenuDiv.appendChild(createItem('Vecera', 'Prvo Drugo Trece Cetvrto', 5));
}

function displayDrinks() {
  const drinksMenuDiv = document.querySelector('.menu-div4');
  const drinksCover = document.createElement('div');
  drinksCover.classList.add('cover-picture');
  drinksCover.classList.add('drinks-cover');

  drinksMenuDiv.appendChild(drinksCover);

  const drinksMenuTitle = document.createElement('h1');
  drinksMenuTitle.textContent = 'Drinks & Wines';

  drinksMenuDiv.appendChild(drinksMenuTitle);
  drinksMenuDiv.appendChild(createItem('Dorucak', 'Prvo Drugo Trece Cetvrto', 4));
  drinksMenuDiv.appendChild(createItem('Rucak', 'Prvo Drugo Trece Cetvrto', 6));
  drinksMenuDiv.appendChild(createItem('Vecera', 'Prvo Drugo Trece Cetvrto', 5));
}

function displayDesserts() {
  const dessertMenuDiv = document.querySelector('.menu-div5');
  const dessertCover = document.createElement('div');
  dessertCover.classList.add('cover-picture');
  dessertCover.classList.add('dessert-cover');

  dessertMenuDiv.appendChild(dessertCover);

  const dessertMenuTitle = document.createElement('h1');
  dessertMenuTitle.textContent = 'Deserts';

  dessertMenuDiv.appendChild(dessertMenuTitle);
  dessertMenuDiv.appendChild(createItem('Dorucak', 'Prvo Drugo Trece Cetvrto', 4));
  dessertMenuDiv.appendChild(createItem('Rucak', 'Prvo Drugo Trece Cetvrto', 6));
  dessertMenuDiv.appendChild(createItem('Vecera', 'Prvo Drugo Trece Cetvrto', 5));
}

function displayMenuDiv() {
  if (document.querySelector('.main-menu-div')) {
    return;
  } else {
    createMenus();
    displayAppetizerMenuDiv();
    displayMainCourseMenuDiv();
    displaySaladsMenuDiv();
    displayDrinks();
    displayDesserts();
  }
}

export function displayMenuPage() {
  menuPage.classList.add('menu');
  displayMenuDiv();
}

export default menuPage;

export { 
  isPageLoaded
};