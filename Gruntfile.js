module.exports = function(grunt) {

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		shell: {
			options: {
				stdout: true
			},
			selenium: {
				command: './selenium/start',
				options: {
					stdout: false,
					async: true
				}
			}
			protractor_install: {
				command: 'node ./node_modules/protractor/bin/webdriver-manager update'
			},
			npm_install: {
				command: 'npm install'
			}
		},

		connect: {
			options: {
				basse: 'app/'
			},
			webserver: {
				options: {
					port: 8888,
					keepalive: true
				}
			},
			devserver: {
				options: {
					port: 8888
				}
			},
			testserver: {
				options: {
					port: 9999
				}
			},
			coverage: {
				options: {
					base: 'coverage/',
					port: 5555,
					keepalive: true
				}
			}
		},

		protractor: {
			options: {
				keepalive: true,
				configFile: "./test/protractor.conf.js"
			},
			singlerun: {},
			auto: {
				keepalive: true,
				options: {
					args: {
						seleniumPort: 4444
					}
				}
			}
		},

		jshint: {
			options: {
				jshintrc: 'jshintrc'
			},
		},

	});

}