/*
 * grunt-firetpl
 * 
 *
 * Copyright (c) 2014 Andi Oxidant
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        firetpl: {
            default_options: {
                options: {

                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled.js'
            },
            commonjs: {
                options: {
                    commonjs: true
                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled-commonjs.js'
            },
            amd: {
                options: {
                    amd: true
                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled-amd.js'
            },
            amdModuleName: {
                options: {
                    amd: true,
                    moduleName: 'firetpl-templates'
                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled-amd-module-name.js'
            },
            i18nDefault: {
                options: {
                    i18n: 'en-US',
                    i18nDir: 'test/fixtures/locale'
                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled-i18n-default.js'
            },
            i18nGerman: {
                options: {
                    i18n: 'de-DE',
                    i18nDir: 'test/fixtures/locale'
                },
                src: ['test/fixtures/*.fire'],
                dest: 'tmp/precompiled-i18n-german.js'
            }
        },

        // Unit tests.
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*_test.js']
            }
        },

        release: {
            options: {
                npm: true, //default: true
                npmtag: true, //default: no tag
                indentation: '    ', //default: '  ' (two spaces)
                tagName: 'v<%= version %>', //default: '<%= version %>'
                commitMessage: 'Release v<%= version %>', //default: 'release <%= version %>'
                tagMessage: 'Tagging release v<%= version %>', //default: 'Version <%= version %>',
                beforeRelease: ['build']
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-release');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'firetpl', 'mochaTest']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
