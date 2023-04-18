const verbose = true;

const clickOptionsDemo = {
  waitUntilVisible: true, // Waiting for it
  moveTo: true, // Scroll to it
  timeout: {
    before: 2500, // pre-click timeout
    after: 1250, // post-click timeout
  },
  verbose, // Enable console logging
};

const testDevices = ["Iphone 5", "HD Screen"];

const {
  findDeviceByName,
  excludeDevicesNames,
} = require("../utils/test_devices_list");

describe("modify device dimensions and run testScenario", function () {
  excludeDevicesNames().forEach((deviceName) => {
    it("Device Name: " + deviceName, async function () {
      const device = findDeviceByName(deviceName);

      browser.resizeWindow(device.width, device.height);

      browser
        .navigateTo("https://www.google.com")
        .pause(500)
        .navigateTo("https://www.google.com")
        .pause(500)
        .sendKeys('textarea[name="q"]', "what is nightwatch?")
        .clickExtended('input[name="btnK"]', clickOptionsDemo)
        .clickExtended('div[jscontroller="w4UyN"]', {
          waitUntilVisible: true,
          timeout: { before: 1000, after: 1000 },
          verbose,
        })
        .clickExtended('span[jsaction="UVNdjb"]', { verbose })
        .clickExtended('div[id="hdtb-tls"]', { verbose })
        .pause(1000);
    });
  });
});
