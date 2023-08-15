const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'

export default class LoginPage {
	visitLoginPage() {
		cy.visit(URL)
	}

	fillUsername(name) {
		cy.get(USERNAME_INPUT).type(name)
	}

	fillPassword(password) {
		cy.get(PASSWORD_INPUT).type(password)
	}

	submit() {
		cy.get(SUBMIT_BUTTON).click()
	}
}
