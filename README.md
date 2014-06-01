# grunt-firetpl

> Precompiler for FireTPL

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-firetpl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-firetpl');
```

## The "firetpl" task

### Overview
In your project's Gruntfile, add a section named `firetpl` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  firetpl: {
    dist: {
      options: {
        // Task-specific options go here.
      },
      src: ['templates/*.fire'],
      dest: 'precompiled.js'
    }
  }
});
```

### Options

#### options.amd
Type: `Boolean`
Default value `false`

Precompile as an AMD module.

#### options.commonjs
Type: `Boolean`
Default value `false`

Precompile as CommonJS module.

#### options.firetplModule
Type: `String`
Default value `false`

Set the name of FireTPL module for AMD and CommonJS ( var FireTPL = require(\'myFireTPLModule\'))'

#### options.moduleName
Type: `String`
Default value `false`

Set the name of the AMD module ( define(\'myname\', [\'firetpl\'] ... ); )'

#### options.noScope
Type: `Boolean`
Default value `false`

Don\'t wrap a scope function. (Ignored if the AMD or CommonJS option is set)'

#### options.name <name>
Type: `String`
Default value `null`

Set the template name. If this option isn\'t set, the name will be extracted from the tempalte filename'

#### options.debug
Type: `Boolean`
Default value `false`

Enable debug mode

#### options.verbose
Type: `Boolean`
Default value `false`

Output more infos


### Usage Examples

#### Default Options
In this example, the default options are used.

```js
grunt.initConfig({
  firetpl: {
    options: {},
    src: ['templates/*.fire'],
    dest: 'precompiled.js'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
