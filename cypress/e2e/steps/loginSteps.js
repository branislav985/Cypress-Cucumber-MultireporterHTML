import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()
// const USERNAME = 'username'
// const PASSWORD = 'password'

Given('I open login page', () => {
	loginPage.visitLoginPage()
})

When('I submit login {string} and {string}', (USERNAME, PASSWORD) => {
	loginPage.fillUsername(USERNAME)
	loginPage.fillPassword(PASSWORD)
	loginPage.submit()
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})
