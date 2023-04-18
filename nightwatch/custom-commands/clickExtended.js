// Usage
//
//=>  browser.clickExtended(querySelector, options)
//
// - - - - - - - - - - - - - - - - - - - - - - -
//
//=>  Options Object & Default Values:
//      options = {
//          verbose: false,
//          waitUntilVisible: true,
//          moveTo: true,
//          timeout: {
//              before: 0, //ms
//              after: 0, //ms
//          },
//      }
//
// - - - - - - - - - - - - - - - - - - - - - - -
//

const getBool = (val, def) => (typeof val === "boolean" ? val : def);

module.exports = {
  command: async (selector, options = {}) => {
    const verbose = getBool(options?.verbose, false);
    const moveTo = getBool(options?.moveTo, true);
    const waitUntilVisible = getBool(options?.waitUntilVisible, true);

    const beforeTimeout = options?.timeout?.before || 10;
    const afterTimeout = options?.timeout?.after || 10;

    const browserEnvName = browser.options.desiredCapabilities.browserName;
    const log = (args) => verbose && console.log(...args);

    log(["selector", selector, typeof selector]);

    if (typeof selector !== "string")
      throw Error("Invalid selector type, expected [string]");
    const elem = element(selector);

    //log(["ELEM : ", elem]);

    if (waitUntilVisible) {
      log(["[clickExtended : waitForElementVisible (" + String(elem) + ")]"]);
      browser.waitForElementVisible(elem);
    }

    if (!isNaN(beforeTimeout) && beforeTimeout > 0) {
      log(["[clickExtended : beforeTimeout (" + String(beforeTimeout) + ")]"]);
      browser.pause(beforeTimeout);
    }

    if (moveTo) {
      const resultElement = await browser.getLocation(selector);
      log(["resultElement", resultElement]);
      log(["[clickExtended : moveToElement ]"]);
      await browser.moveTo(null, resultElement.x, resultElement.y);
    }

    browser.click(elem);

    if (!isNaN(afterTimeout) && afterTimeout > 0) {
      log(["[clickExtended : afterTimeout (" + String(afterTimeout) + ")]"]);
      browser.pause(afterTimeout);
    }

    return browser;
  },
};
