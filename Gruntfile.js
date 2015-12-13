
module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    wiredep: {
      src: ['./_layouts/**/*', './_includes/**/*'],
      options: {
        overrides: {
          "directory": "./bower_components/"
        }
      }
    }
  });
};
