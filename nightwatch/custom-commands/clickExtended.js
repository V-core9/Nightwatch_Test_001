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
    const waitUntilPresent = getBool(options?.waitUntilPresent, true);
    const waitUntilVisible = getBool(options?.waitUntilVisible, true);

    const beforeTimeout = options?.timeout?.before || 10;
    const afterTimeout = options?.timeout?.after || 10;

    const browserEnvName =
      browser?.options?.desiredCapabilities?.browserName || undefined;
    const log = (args) => verbose && console.log(...args);

    log(["selector", selector, typeof selector]);

    if (typeof selector !== "string")
      throw Error("Invalid selector type, expected [string]");

    const elem = await browser
      .waitForElementPresent(selector, 5000)
      .findElement(selector);

    await browser.moveTo(null, 0, 20);
    if (moveTo) {
      log(["[clickExtended : moveToElement ]"]);
      await browser.moveToElement(selector, 10, 10);
    }

    await browser
      .waitForElementVisible(
        "css selector",
        selector,
        5000,
        "elemento %s no era presente en %d ms"
      )
      .pause(!isNaN(beforeTimeout) && beforeTimeout > 0 ? beforeTimeout : 0)
      .click(selector)
      .pause(!isNaN(afterTimeout) && afterTimeout > 0 ? afterTimeout : 0);

    return browser;
  },
};
