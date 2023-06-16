const aboutUsPage = document.createElement('div');

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
const projectBackgroundAuthorText = document.createElement('p');
const projectBackgroundAuthorLink = document.createElement('a');

function displayContactDiv() {
  aboutUsPage.appendChild(contactDiv);
  contactDiv.classList.add('contact-div-aboutUs');

  contactDiv.appendChild(contactH2);
  contactH2.textContent = 'Contact';

  contactDiv.appendChild(contactWorkingDays);
  contactWorkingDays.textContent = 'Monday - Sunday';

  contactDiv.appendChild(contactWorkingHours);
  contactWorkingHours.textContent = '11:00 - 23:00';
  
  contactDiv.appendChild(contactLocation);
  contactLocation.textContent = 'Location: 123 Not Real Place, Thera Greece';

  contactDiv.appendChild(contactPhone);
  contactPhone.textContent = 'Phone number: +30 123 456 7890';

  contactDiv.appendChild(contactEmail);
  contactEmail.textContent = 'Email: horizon@restaurant-project.com';
}

function displayAboutUsDiv() {
  aboutUsPage.appendChild(aboutDiv);
  aboutDiv.classList.add('about-div-aboutUs');

  aboutDiv.appendChild(aboutH2);
  aboutH2.textContent = 'About Us';
  aboutDiv.appendChild(notRealProjectText);
  notRealProjectText.textContent = 'We are not real restaurant!';
  aboutDiv.appendChild(projectGoalText);
  projectGoalText.textContent = 'This is just a "project" from the Odin Project curriculum. Main goal of this project is to learning how to implement npm and webpack, with having header navigation bar.';

  aboutDiv.appendChild(projectBackgroundAuthorText);
  projectBackgroundAuthorText.textContent = 'Background picture from ';

  projectBackgroundAuthorText.appendChild(projectBackgroundAuthorLink);
  projectBackgroundAuthorLink.textContent = 'Angela Pham';
  projectBackgroundAuthorLink.href = 'https://www.unsplash.com/@apham';
  projectBackgroundAuthorLink.setAttribute('target', '_blank');
}

export function displayAboutUsPage() {
  displayContactDiv();
  displayAboutUsDiv();
  aboutUsPage.classList.add('aboutUs');
}

export default aboutUsPage;