'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.firetpl = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/precompiled.js');
    var expected = grunt.file.read('test/expected/precompiled.js');
    test.equal(actual, expected, 'should parse all .fire files');

    test.done();
  },
  commonjs: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/precompiled-commonjs.js');
    var expected = grunt.file.read('test/expected/precompiled-commonjs.js');
    test.equal(actual, expected, 'should parse all .fire files');

    test.done();
  },
  amd: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/precompiled-amd.js');
    var expected = grunt.file.read('test/expected/precompiled-amd.js');
    test.equal(actual, expected, 'should parse all .fire files');

    test.done();
  },
  amdModuleName: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/precompiled-amd-module-name.js');
    var expected = grunt.file.read('test/expected/precompiled-amd-module-name.js');
    test.equal(actual, expected, 'should parse all .fire files');

    test.done();
  }
};
