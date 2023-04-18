// Usage 
//
//=>  browser.resizedTest(device, callback, options = {})
//
const { findDeviceByName } = require('../../utils/test_devices_list');

module.exports = {
    command: (devices, callback, options = {}) => {
        const verbose = options?.verbose || false;
        verbose && console.log('[ resizedTest | Devices list: ' + JSON.stringify(devices) + ']')

        const dvcList = [];

        devices.map(dvc => dvcList.push(findDeviceByName(dvc)));

        dvcList.map(dvc => {
            browser.resizeWindow(dvc.width, dvc.height);
            callback();
        })

        return this;
    }
}