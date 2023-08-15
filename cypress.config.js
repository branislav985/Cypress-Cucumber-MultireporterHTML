const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
	e2e: {
		video: false,
		defaultCommandTimeout: 5000,
		pageLoadTimeout: 10000,
		specPattern: './cypress/e2e/*feature',
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())
			// implement node event listeners here
		},
	},
})
