'use strict';

var grunt = require('grunt'),
    expect = require('expect.js');

describe('grunt-firetpl', function() {
    it('Should parse all .fire files', function() {
        var actual = grunt.file.read('tmp/precompiled.js');
        var expected = grunt.file.read('test/expected/precompiled.js');
        expect(expected).to.eql(actual);
    });
    
    it('Should parse all .fire files', function() {
        var actual = grunt.file.read('tmp/precompiled-commonjs.js');
        var expected = grunt.file.read('test/expected/precompiled-commonjs.js');
        expect(expected).to.eql(actual);
    });
    
    it('Should parse all .fire files', function() {
        var actual = grunt.file.read('tmp/precompiled-amd.js');
        var expected = grunt.file.read('test/expected/precompiled-amd.js');
        expect(expected).to.eql(actual);
    });

    it('Should parse all .fire files', function() {
        var actual = grunt.file.read('tmp/precompiled-amd-module-name.js');
        var expected = grunt.file.read('test/expected/precompiled-amd-module-name.js');
        expect(expected).to.eql(actual);
    });

    it('Should precompile a i18n file (default)', function() {
        var actual = grunt.file.read('tmp/precompiled-i18n-default.js');
        var expected = grunt.file.read('test/expected/precompiled-i18n-default.js');
        expect(expected).to.eql(actual);
    });

    it('Should precompile a i18n file (german)', function() {
        var actual = grunt.file.read('tmp/precompiled-i18n-default.js');
        var expected = grunt.file.read('test/expected/precompiled-i18n-default.js');
        expect(expected).to.eql(actual);
    });

});
