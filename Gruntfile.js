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
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'firetpl', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
