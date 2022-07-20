
// import { when } from 'cypress/types/jquery';
import CCHFormHomePage from '../PageObjects/CCHFormHomePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


const HomePage = new CCHFormHomePage()
let key = null

Given('I navigate to the CCH Form', () => {
  HomePage.visit()
});

When('I click on Student Personal Information', () => {
  HomePage.clickStudentPersonalInfoPage()
});

Then('I verify {string} page', (page) => {
  HomePage.verifyStudentPersonalInfoPage(page)
});

When('I give first name as {string} and second name as {string}', (fName, lName) => {
  HomePage.fillStudentName(fName, lName)
});

And('I give gender as {string}', (gender) => {
  HomePage.selectGender(gender)
});

And('I give street as {string} AND zip code as {string} AND city as {string} AND state as {string}', (street, zip, city, state) => {
  HomePage.fillAddressDetails(street, zip, city, state)
});

// ------------
And('I give email as {string} AND cell phone {string} AND birthday as {string}', (email, phone, bDay) => {
  HomePage.fillEmailPhoneBdayDetails(email, phone, bDay)
});

And('I click Will the student be retained', () => {
  HomePage.clickRetained()
});

And('I select type of school as {string} and school as {string}', (schoolType, school) => {
  HomePage.schoolDetails(schoolType, school)
});

And('I give Emergency contact name as {string} AND Emegency phone as {string} AND Realtionship to the student as {string}', (name, phone, relationship) => {
  HomePage.emergencyDetails(name, phone, relationship)
});

And('I give fill sports and after school activities as {string}', (description) => {
  HomePage.sportsAfterSchoolActivitiesDetails(description)
});

And('I click on next', () => {
  HomePage.clickNext()
});

