
module.exports = function (grunt) {
  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    wiredep: {
      site: {
        src: ['./_layouts/**/*.html', './_includes/**/*.html'],
        options: {
          ignorePath: '../',
          fileTypes: {
            html: {
              replace: {
                js: '<script src="\{\{ site.url\}\}/{{filePath}}"></script>',
                css: '<link rel="stylesheet" href="\{\{ site.url\}\}/{{filePath}}" />'
              }
            }
          },
          overrides: {
            "directory": "/bower_components/"
          }
        }
      }
    }
  });
};
