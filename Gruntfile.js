
module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    wiredep: {
      site: {
        src: ['./_layouts/**/*.html', './_includes/**/*.html'],
        options: {
          overrides: {
            "directory": "./bower_components/"
          }
        }
      }
    }
  });
};
