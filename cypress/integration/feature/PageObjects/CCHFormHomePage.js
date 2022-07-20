class CCHFormHomePage {

    visit() {
        cy.visit('/', { failOnStatusCode: false })

    }

    clickStudentPersonalInfoPage() {
        cy.get('.active > .progress-count').click()

    }

    verifyStudentPersonalInfoPage() {
        cy.get('.hlc-conf-ui-card__header').contains("Student Personal Information").should('be.visible')
    }

    fillStudentName(fName, lName) {
        cy.get('#mat-input-0').type(fName)
        cy.get('#mat-input-1').type(lName)

    }

    selectGender(gender) {
        if (gender == "Female")
            cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        else
            cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
    }

    fillAddressDetails(street, zip, city, state) {
        cy.get('#mat-input-2').type(street)
        cy.get('#mat-input-3').type(zip)
        cy.get('#mat-input-4').type(city)
        // state field is in development
        // cy.get('#mat-select-value-1').type(state)
    }

    fillEmailPhoneBdayDetails(email, phone, bDay) {
        cy.get('#mat-input-5').type(email)
        cy.get('#mat-input-6').type(phone)
        cy.get('.mat-datepicker-input').type(bDay)
    }

    clickRetained() {
        cy.get('.mat-checkbox-inner-container').click()
    }

    schoolDetails(schoolType, school) {
        cy.get('#mat-radio-7 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-select-value-5').click()
        cy.get('#mat-option-2 > span').click()
    }

    emergencyDetails(name, phone, relationship) {
        cy.get('#mat-input-7').type(name)
        cy.get('#mat-input-8').type(phone)

        if (relationship == "Parent")
            cy.get('#mat-radio-14').type(relationship)
        else if (relationship == "Guardian")
            cy.get('#mat-radio-15').type(relationship)
        else
            cy.get('#mat-radio-16').type(relationship)

    }

    sportsAfterSchoolActivitiesDetails(description) {
        cy.get('#mat-input-9').type(description)
    }

    clickNext() {
        cy.get('.next-button').click()
    }
}
export default CCHFormHomePage