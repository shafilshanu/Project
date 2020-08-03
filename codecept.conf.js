const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
    },
    WebDriver : {
      url: "http://localhost",
      browser: "chrome",
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--no-sandbox" ],
        },
        selenoidOptions: {
          enableVNC: true,
        },
      },
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