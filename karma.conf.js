// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['systemjs', 'jasmine'],
    plugins: [
      require('karma-systemjs'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [{
      pattern: "app/**/*.js"
    }],
    
    systemjs: {
      // Path to your SystemJS configuration file 
      configFile: 'config.js',

      // // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries. 
      serveFiles: [
        'app/**/*.*'
      ],

      // SystemJS configuration specifically for tests, added after your config file. 
      // Good for adding test libraries and mock modules 
      includeFiles: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js'
      ],
      // testFileSuffix: "spec.js",
      config: {
        paths: {
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'angular-mocks': 'node_modules/angular-mocks/angular-mocks.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        }
      }
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: ["kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  });
};
