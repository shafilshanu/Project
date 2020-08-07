
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
        url: "http://localhost",
        browser: "chrome",
        host: '127.0.0.1',
        port:  4444,
        restart: false,
        windowSize: '1920x1680',
        desiredCapabilities: {
          chromeOptions: {
            args: [/* "--headless",*/ "--disable-gpu", "--no-sandbox" ]
          }
        }
    },
    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder : "./output/",
      baseFolder: "./screenshots/base/",
      diffFolder: "./screenshots/diff/",
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'session2',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}