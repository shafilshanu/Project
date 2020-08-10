
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium:{
        platform: "Android",
        device: "emulator",
        app: "C:\Users\Shafil\Downloads\Calculator.apk",
        desiredCapabilities: {
           deviceName: "Android Emulator",
           avd: "Pixel_3_API_24",
           appPackage: "com.google.android.calculator",
           appActivity: "com.android.calculator2.calculator",
           automationName: "UIAutomator2",
           fullReset: false,
           noReset: false,
          },
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