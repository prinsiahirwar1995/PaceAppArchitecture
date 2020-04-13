// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
<<<<<<< HEAD
      dir: require('path').join(__dirname, './coverage/ApplicationForPaceLayer'),
=======
<<<<<<< HEAD
      dir: require('path').join(__dirname, './coverage/PaceLayerApplication'),
=======
      dir: require('path').join(__dirname, './coverage/PaceLayerUI'),
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
