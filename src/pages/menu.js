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
  appetizerMenuDiv.appendChild(createItem('Tzatziki', 'Homemade Yogurt with Cucumber, Garlic, Olive oil, Fresh Herbs, Served with Kalamata Olives and Pita bread', 9.99));
  appetizerMenuDiv.appendChild(createItem('Shrimp Cocktail', '5 Wild Caught Jumbo Shrimp Served with Cocktail Sauce', 19.99));
  appetizerMenuDiv.appendChild(createItem('Octopus', 'Grilled Octopus Served with Fingerling Potatoes Caramelized Onions capers Lemon pesto sauce', 10.99));
  appetizerMenuDiv.appendChild(createItem('Vegetarian Sampler', 'Hummus / Baba Ghanoush / Zucchini / Tzatziki / Dolmades / Feta with Tomato & Cucumber', 10.99));
  appetizerMenuDiv.appendChild(createItem('Grilled Calamari', 'Fresh Tender Calamari Grilled to Perfection', 16.99));
  appetizerMenuDiv.appendChild(createItem('Fetta Patter', 'Served with a Greek Pita, Tomato, Cucumber, Olives, Olive Oil, Oregano', 11.99));
  appetizerMenuDiv.appendChild(createItem('French Fries', '', 9.99));
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
  mainCourseMenuDiv.appendChild(createItem('Lamb Gyro', 'Grilled lamb gyros meat on Greek pita, Lettuce, Tomato, Onion, Tzatziki', 21.99));
  mainCourseMenuDiv.appendChild(createItem('Chicken Gyro', 'Grilled Chicken breast meat in a special marinade on Greek pita, Lettuce, Tomato, Onion, Tzatziki', 18.99));
  mainCourseMenuDiv.appendChild(createItem('Souvlaki', 'Grilled Pork marinated in spices on Greek pita, Lettuce, Tomato, Onion, Tzatziki', 19.99));
  mainCourseMenuDiv.appendChild(createItem('Salmon', 'Mediterranean style Pan-seared Salmon sautéed with Fennel, Cherry Tomatoes, Risotto in butter Lemon Sauce', 27.99));
  mainCourseMenuDiv.appendChild(createItem('Lobster Risotto', 'Risotto sautéed with Lobster Meat Peas and Cherry Tomatoes in a White Wine Garlic Sauce', 29.99));
  mainCourseMenuDiv.appendChild(createItem('Orphali (spicy)', 'Ground Beef patty with garlic, spices & onion with hummus & rice, Lettuce, Greek pita', 18.99));
  mainCourseMenuDiv.appendChild(createItem('Greek Steak', 'Fillet steak, Onions, Tomato, Fetta, Cucumber', 22.99));
  mainCourseMenuDiv.appendChild(createItem('Chicken Santorini', 'Chicken breast with Shrimp, Tomatoe, Onion, Peppers, Mythos beer sauce topped with grated Fetta Cheese', 19.99));
  mainCourseMenuDiv.appendChild(createItem('Special House Combo', 'Lamb Gyro / Chicken Gyro / Souvlaki / with soft drink and your choice of salad and potato chips', 34.99));
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
  saladMenuDiv.appendChild(createItem('Greek', 'Cherry tomatoes, Cucumber, Feta Cheese, Olives, Onions, Olive oil', 11.99));
  saladMenuDiv.appendChild(createItem('Caesar', 'Fresh romaine hearts, herbed croutons shaved parmigiana cheese in a classic creamy Caesar dressing', 12.99));
  saladMenuDiv.appendChild(createItem('Santorini', 'Organic Fields Green, Cucumbers, Avocado, Fetta Cheese', 12.99));
  saladMenuDiv.appendChild(createItem('Amvrakikos', 'Prawns with Avocado, Fresh Salad, Santorini Tomatoes, Olive Oil', 10.99));
  saladMenuDiv.appendChild(createItem('Fattoush Salad', 'Lettuce, Tomato, Cucumber, Onion, Toasted bread topped with homemade Sumac Vinaigrette', 9.99));
  saladMenuDiv.appendChild(createItem('Falafel Salad', 'Lettuce, Tomato, Onion, Falafel topped with Tahini Dressing', 9.99));
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
  drinksMenuDiv.appendChild(createItem('Coca Cola', '', 5.99));
  drinksMenuDiv.appendChild(createItem('Sprite', '', 5.99));
  drinksMenuDiv.appendChild(createItem('Coffee', 'American, Turkish', 9.99));
  drinksMenuDiv.appendChild(createItem('Lemonade, Pomegranate', '', 10.99));
  drinksMenuDiv.appendChild(createItem('Tea', 'Black English Tea, Green Tea, Lemon Tea', 11.99));
  drinksMenuDiv.appendChild(createItem('Duval Leroy Brut Reserve NV Vertus', 'Pinot noir, Chardonnay', 12.99));
  drinksMenuDiv.appendChild(createItem('Billecart Salmon Brut Reserve NV Ay', 'Pinot noir, Chardonnay', 13.99));
  drinksMenuDiv.appendChild(createItem('Duval Leroy Prestige Premier Cru Brut Rose, Nv Vertus', 'Pinot Noir, Chardonnay', 15.99));
  drinksMenuDiv.appendChild(createItem('Gancia Prosecco Brut DOC', 'Glera', 12.99));
  drinksMenuDiv.appendChild(createItem('ROSE SPARKLING', '', 11.99));
  drinksMenuDiv.appendChild(createItem('Vassaltis Winery, Santorini PDO', 'Assyrtiko', 13.99));
  drinksMenuDiv.appendChild(createItem('Alfa Estate Sauvignon Blanc Fume, PGI, Amyntaio', 'Sauvignon blanc ', 18.99));
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
  dessertMenuDiv.appendChild(createItem('Watermelon', '', 6.99));
  dessertMenuDiv.appendChild(createItem('Walnut Baklava', '', 8.99));
  dessertMenuDiv.appendChild(createItem('Cashew Baklava', '', 8.99));
  dessertMenuDiv.appendChild(createItem('Chopped seasonal fruits', 'With homemade Ice Cream', 12.99));
  dessertMenuDiv.appendChild(createItem('Gianduja', 'Gianduja mousse, hazelnut biscuit, crunchy hazelnut praline & praline glaze.', 13.99));
  dessertMenuDiv.appendChild(createItem('Aegina island', 'Caramelized mille feuille leaves with chocolate cream & pistachio.', 15.99));
}

// Not sure why scroll-padding-bottom/padding-bottom/margin-bottom doesn't work, so this is bit of cheating 
function bottomBlank() {
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('empty');

  menuPage.appendChild(emptyDiv);
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
    bottomBlank();
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