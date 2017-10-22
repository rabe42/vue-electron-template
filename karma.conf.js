//
// This is the karma configuration file, providing unit test capabilities for vue via webpack.
//

const webpackConfig = require(__dirname + '/webpack.config.js')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: [
      './srcs/index.js',
      {pattern: './srcs/**/*.spec.js'} // each .spec.js file acts as entry point for the webpack configuration
    ],
    preprocessors: {
      './srcs/index.js': ['webpack'],  // This should run the given file through webpack (I hope!)
      './srcs/**/*.spec.js': ['webpack']
    },
    webpack: webpackConfig, // This should trigger the webpack process for the test.
    webpackMiddleware: {
      noInfo: false
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
