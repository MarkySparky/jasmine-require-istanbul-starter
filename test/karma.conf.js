// Karma configuration
// Generated on Fri Jul 04 2014 14:00:10 GMT+0100 (BST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [{
                pattern: 'test/unit/*.js',
                included: false
            }, {
                pattern: 'app/**/*.js',
                included: false
            },
            'test/test-main.js'
        ],

        // list of files to exclude
        exclude: ['app/js/main.js'],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/js/*.js': ['coverage']
            //'app/scripts/aquilla/ContentNode.js': ['coverage']
            //'app/scripts/aquilla/ContentNodeInterface.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            reporters: [{
                    type: 'html',
                    dir: 'coverage/'
                }, {
                    type: 'json',
                    dir: 'coverage/'
                }, {
                    type: 'lcov',
                    dir: 'coverage/'
                }, {
                    type: 'cobertura',
                    dir: 'coverage/',
                    file: 'cobertura.xml'
                } //, {
                //   type: 'teamcity'
                //}
                , {
                    type: 'text-summary'
                }
            ]
        },

        // web server port
        port: 9876,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};