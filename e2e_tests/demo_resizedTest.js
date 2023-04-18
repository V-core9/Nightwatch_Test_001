

const verbose = true;

const clickOptionsDemo = {
    waitUntilVisible: false,    // Waiting for it
    moveTo: true,               // Scroll to it
    timeout: {
        before: 200,           // pre-click timeout
        after: 500,            // post-click timeout
    },
    verbose,                    // Enable console logging
}

const testDevices = ['Iphone 5', 'HD Screen']

const { findDeviceByName, excludeDevicesNames } = require('../utils/test_devices_list')


describe('modify device dimensions and run testScenario', function () {

    it('modifies the device dimensions and then resets it', function () {
        excludeDevicesNames().map(i => {
            const device = findDeviceByName(i);

            browser.resizeWindow(device.width, device.height);

            browser.navigateTo('https://www.google.com')
                .pause(1000)
                .navigateTo('https://www.google.com')
                .pause(1000)
                .sendKeys(element('textarea[name="q"]'), 'what is nightwatch?')
                .clickExtended(element('input[name="btnK"]'), clickOptionsDemo)
                .clickExtended('div[jscontroller="w4UyN"]', { waitUntilVisible: true, timeout: { before: 0, after: 100, }, verbose })
                .clickExtended('span[jsaction="UVNdjb"]', { waitUntilVisible: false, moveTo: false })
                .clickExtended('div[id="hdtb-tls"]', { verbose })
                .pause(1000);
        })
    });
});