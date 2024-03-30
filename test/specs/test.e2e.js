const {remote} = require('webdriverio');
const {wdOpts} = require('./../../config.js');

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const connectionsItem = await driver.$('//*[@text="Conexões"]'); // gettings element by text
    await connectionsItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest();