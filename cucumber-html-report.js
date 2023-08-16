const report = require('multiple-cucumber-html-reporter')
report.generate({
	jsonDir: 'cypress/reports', // ** Path of .json file **//
	reportPath: 'cypress/reports',
	metadata: {
		browser: {
			name: 'chrome',
			version: 'XX',
		},
		device: 'Local test machine',
		platform: {
			name: 'Windows',
			version: '11',
		},
	},
})
