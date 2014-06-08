/*
 * grunt-firetpl
 * 
 *
 * Copyright (c) 2014 Andi Oxidant
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var FireTPL = require('firetpl');

module.exports = function(grunt) {


    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('firetpl', 'Precompiler for FireTPL', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            debug: false,
            moduleName: null,
            firetplModule: 'firetpl',
            amd: false,
            commonjs: false,
            verbose: false,
            noScope: false
        });

        //Set debug mode
        FireTPL.debug = options.debug;

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                grunt.log.ok(filepath);

                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Read file source.
                var source = grunt.file.read(filepath),
                    tplName = path.basename(filepath, path.extname(filepath));

                var precompiled = FireTPL.precompile(source, {
                    name: tplName,
                    scope: false,
                    verbose: options.verbose
                });

                precompiled = 'FireTPL.templateCache[\'' + tplName + '\']=function(data,scopes) {\n\tvar h=new FireTPL.Runtime();\n\t' + precompiled + '\n\treturn s;};';

                return precompiled;
            }).join('');

            if (options.commonjs) {
                src = ';(function(require){var FireTPL = require(\'' + options.firetplModule + '\');' + src + '})(require);';
            }
            else if (options.amd) {
                src = 'define(' + (options.moduleName ? '\'' + options.moduleName + '\',' : '') + '[\'' + options.firetplModule + '\'],function(FireTPL) {' + src + '});';
            }
            else if (!options.amd && !options.commonjs && !options.noScope) {
                src = ';(function(FireTPL){' + src + '})(FireTPL);';
            }

            // Write the destination file.
            grunt.file.write(f.dest, src);
            // grunt.log.writeln('Out: ---------------------------- \n\n' + src + '\n\n----------------------------------------\n\n');

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
