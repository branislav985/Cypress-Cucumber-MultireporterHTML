const report = require('multiple-cucumber-html-reporter')
report.generate({
	jsonDir: 'cypress/reports', // ** Path of .json file **//
	reportPath: 'cypress/reports',
	staticFilePath: false, //Each feature will have static file name. Use this feature only if you are not running multiple instances of the same tests.
	openReportInBrowser: true, //Automatically open report in Browser
	saveCollectedJSON: false, //Mearging all json reports and make HTML report
	pageTitle: 'Multiple Cucumber HTML Reporter', //title of the report
	reportName: 'Name of report', //Name of report
	pageFooter: '<div><p>Neopix QA Team</p></div>',
	displayDuration: true,
	deuationInMS: false,
	hideMetadata: false,
	displayReportTime: true,
	metadata: {
		browser: {
			name: 'chrome',
			version: '115',
		},
		device: 'Local test machine',
		platform: {
			name: 'ios',
			version: '13.3.1 a',
		},
	},
})
