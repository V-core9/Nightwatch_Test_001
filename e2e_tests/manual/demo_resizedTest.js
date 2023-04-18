const {
  findDeviceByName,
  excludeDevicesNames,
} = require("../../utils/test_devices_list");

const verbose = false;
const shortRun = true;

const clickOptionsDemo = {
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
    it("Device Name: " + device.name, async function () {
      await browser
        .navigateTo("https://www.google.com")
        .windowSize("current", device.width, device.height)
        .pause(500)
        .sendKeys('textarea[name="q"]', "what is nightwatch?")
        .clickExtended('input[name="btnK"]', clickOptionsDemo)
        .clickExtended('div[jscontroller="w4UyN"]', {
          timeout: { before: 1000, after: 1000 },
        })
        .clickExtended('span[jsaction="UVNdjb"]', { verbose })
        .clickExtended('div[id="hdtb-tls"]', { verbose })
        .pause(1000)
        .end();
    });
  });
});
