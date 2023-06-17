const aboutUsPage = document.createElement('div');

let isPageLoaded = false;

const contactDiv = document.createElement('div');
const contactH2 = document.createElement('h2');
const contactWorkingDays = document.createElement('h3');
const contactWorkingHours = document.createElement('h3');
const contactLocation = document.createElement('p');
const contactPhone = document.createElement('p');
const contactEmail = document.createElement('p');

const aboutDiv = document.createElement('div');
const aboutH2 = document.createElement('h2');
const notRealProjectText = document.createElement('p');
const projectGoalText = document.createElement('p');
const aboutMenuItems = document.createElement('p');

const projectBackgroundAuthorText = document.createElement('p');
const projectBackgroundAuthorLink = document.createElement('a');

const projectCoverAuthorFirstText = document.createElement('p');
const projectCoverAuthorFirstLink = document.createElement('a');
projectCoverAuthorFirstText.classList.add('first-author');

const projectCoverAuthorSecondText = document.createElement('p');
const projectCoverAuthorSecondLink = document.createElement('a');

const projectCoverAuthorThirdText = document.createElement('p');
const projectCoverAuthorThirdLink = document.createElement('a');

const projectCoverAuthorForthText = document.createElement('p');
const projectCoverAuthorForthLink = document.createElement('a');

const projectCoverAuthorFifthText = document.createElement('p');
const projectCoverAuthorFifthLink = document.createElement('a');

function displayContactDiv() {
  aboutUsPage.appendChild(contactDiv);
  contactDiv.classList.add('contact-div-aboutUs');

  contactH2.textContent = 'Contact';
  contactWorkingDays.textContent = 'Monday - Sunday';
  contactWorkingHours.textContent = '11:00 - 23:00';
  contactLocation.textContent = 'Location: 123 Not Real Place, Thera Greece';
  contactPhone.textContent = 'Phone number: +30 123 456 7890';
  contactEmail.textContent = 'Email: horizon@restaurant-project.com';

  contactDiv.append(contactH2, contactWorkingDays, contactWorkingHours, contactLocation, contactPhone, contactEmail);
}

function displayAboutUsDiv() {
  aboutUsPage.appendChild(aboutDiv);
  aboutDiv.classList.add('about-div-aboutUs');

  aboutH2.textContent = 'About Us';
  notRealProjectText.textContent = 'We are not real restaurant!';
  projectGoalText.textContent = 'This is just a "project" from the Odin Project curriculum. Main goal of this project is to learning how to implement npm and webpack, with having header navigation bar.';
  aboutMenuItems.textContent = 'Food list, names and ingredients are coppied from few restorants from Santorini.';

  projectCoverAuthorFirstText.textContent = 'Appetizer photo from ';
  projectCoverAuthorFirstText.appendChild(projectCoverAuthorFirstLink);
  projectCoverAuthorFirstLink.textContent = ' Quin Engle';
  projectCoverAuthorFirstLink.href = 'https://www.unsplash.com/@twistsandzests';
  projectCoverAuthorFirstLink.setAttribute('target', '_blank');

  projectCoverAuthorSecondText.textContent = 'Main Course photo from ';
  projectCoverAuthorSecondText.appendChild(projectCoverAuthorSecondLink);
  projectCoverAuthorSecondLink.textContent = ' Lily Banse';
  projectCoverAuthorSecondLink.href = 'https://www.unsplash.com/@lvnatikk';
  projectCoverAuthorSecondLink.setAttribute('target', '_blank');

  projectCoverAuthorThirdText.textContent = 'Salad photo from ';
  projectCoverAuthorThirdText.appendChild(projectCoverAuthorThirdLink);
  projectCoverAuthorThirdLink.textContent = ' Sara Dubler';
  projectCoverAuthorThirdLink.href = 'https://www.unsplash.com/@ahungryblonde_';
  projectCoverAuthorThirdLink.setAttribute('target', '_blank');

  projectCoverAuthorForthText.textContent = 'Drinks photo from ';
  projectCoverAuthorForthText.appendChild(projectCoverAuthorForthLink);
  projectCoverAuthorForthLink.textContent = ' Kobby Mendez';
  projectCoverAuthorForthLink.href = 'https://www.unsplash.com/@kobbymendez';
  projectCoverAuthorForthLink.setAttribute('target', '_blank');

  projectCoverAuthorFifthText.textContent = 'Dessert photo from ';
  projectCoverAuthorFifthText.appendChild(projectCoverAuthorFifthLink);
  projectCoverAuthorFifthLink.textContent = ' Monika Grabkowska';
  projectCoverAuthorFifthLink.href = 'https://www.unsplash.com/@moniqa';
  projectCoverAuthorFifthLink.setAttribute('target', '_blank');

  projectBackgroundAuthorText.textContent = 'Background photo from ';
  projectBackgroundAuthorText.appendChild(projectBackgroundAuthorLink);
  projectBackgroundAuthorLink.textContent = ' Angela Pham';
  projectBackgroundAuthorLink.href = 'https://www.unsplash.com/@apham';
  projectBackgroundAuthorLink.setAttribute('target', '_blank');

  aboutDiv.append(aboutH2, notRealProjectText, projectGoalText, aboutMenuItems);
  aboutDiv.append(projectCoverAuthorFirstText, projectCoverAuthorSecondText, projectCoverAuthorThirdText);
  aboutDiv.append(projectCoverAuthorForthText, projectCoverAuthorFifthText, projectBackgroundAuthorText);
}

export function displayAboutUsPage() {
  displayContactDiv();
  displayAboutUsDiv();
  aboutUsPage.classList.add('aboutUs');
}

export default aboutUsPage;

export {
  isPageLoaded,
}