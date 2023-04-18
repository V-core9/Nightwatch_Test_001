const {
  findDeviceByName,
  excludeDevicesNames,
} = require("../../utils/test_devices_list");

const verbose = false;
const shortRun = false;

const clickOptionsDemo = {
  waitUntilPresent: true, // Waiting for it
  waitUntilVisible: true, // Waiting for it
  moveTo: true, // Scroll to it
  timeout: {
    before: 2500, // pre-click timeout
    after: 1250, // post-click timeout
  },
  verbose, // Enable console logging
};

const testDevices = ["Iphone 5", "HD Screen"];

describe("modify device dimensions and run testScenario", function () {
  (shortRun ? testDevices : excludeDevicesNames()).forEach((deviceName) => {
    const device = findDeviceByName(deviceName);
    it("Device Name: " + deviceName, async function () {
      await browser.windowSize("current", device.width, device.height);
      await browser.navigateTo("https://www.google.com");
      await browser.pause(500);
      await browser.sendKeys('textarea[name="q"]', "what is nightwatch?");
      await browser.clickExtended('input[name="btnK"]', clickOptionsDemo);
      await browser.clickExtended('div[jscontroller="w4UyN"]', {
        waitUntilVisible: true,
        timeout: { before: 1000, after: 1000 },
        verbose,
      });
      await browser.clickExtended('span[jsaction="UVNdjb"]', {
        verbose,
      });
      await browser.clickExtended('div[id="hdtb-tls"]', { verbose });
      await browser.pause(1000);
      await browser.end();
    });
  });
});
