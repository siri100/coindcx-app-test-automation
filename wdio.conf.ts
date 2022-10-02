var browserstack = require('browserstack-local');

exports.config = {

  runner: 'local',

  specs: [
      './testscripts/specs/smokeTest-Android.ts'
  ],
  exclude: [
      // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [{    
    
    "platformName": "Android",
    "automationName": "UIAutomator2",
    "udid": "RZ8R220H1EY",
    "platformVersion": "12.0",
    "app": "C:\\coindcxPro.apk",
    "unicodeKeyboard" : 'true',
    "resetKeyboard" : 'true'
      
  }],
  logLevel: 'info',
  reporters: [ 'spec'],
  bail: 0,
  baseUrl: 'http://localhost',
  path: '/wd/hub',
  waitforTimeout: 300000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  port: 4723,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
    requires: ['ts-node-register' ],
},

autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
        transpileOnly: true,
        project: 'tsconfig.json'
    },
    tsConfigPathsOpts: {
        baseUrl: './'
    }
},

}
