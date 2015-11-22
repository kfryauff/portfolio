// protractor.conf.js

exports.config = {

	seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-3.3.9.jar',
	seleniumPort: null,
	chromeDriver: '../node_modules/protractor/selenium/chromedriver',
	seleniumArgs: [],

	specs: [
		'./e2e/*.js'
	],

	compatibilties: {
		'browserName': 'chrome'
	},

	baseUrl: 'http://localhost:9999',
	rootElement: 'body',

	// Opt for minijasminenode:
	jasmineNodeOpts: {
		onComplete: null,
		isVerbose: false,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 10000
	}

};