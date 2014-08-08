module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Time the tasks
    require('time-grunt')(grunt);

    // Project configuration.
    grunt.initConfig({

        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }

    });

    grunt.registerTask('default', [
        'karma'
    ]);

};