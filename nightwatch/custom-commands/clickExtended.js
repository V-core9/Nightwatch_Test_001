// Usage
//
//=>  browser.clickExtended(querySelector, options)
//
// - - - - - - - - - - - - - - - - - - - - - - -
//
//=>  Options Object & Default Values:
//      options = {
//          verbose: false,
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

    const beforeTimeout = options?.timeout?.before || 10;
    const afterTimeout = options?.timeout?.after || 10;

    const log = (args) => verbose && console.log(...args);

    if (typeof selector !== "string")
      throw Error("Invalid selector type, expected [string]");

    await browser
      .waitForElementPresent(selector, 5000)
      .waitForElementVisible("css selector", selector, 5000)
      .waitForElementPresent(selector, 5000)
      //.moveToElement(selector, 0, 0)
      .pause(!isNaN(beforeTimeout) && beforeTimeout > 0 ? beforeTimeout : 0)
      .click(selector)
      .pause(!isNaN(afterTimeout) && afterTimeout > 0 ? afterTimeout : 0);

    return browser;
  },
};
