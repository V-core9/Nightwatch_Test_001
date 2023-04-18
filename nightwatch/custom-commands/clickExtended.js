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

const getBool = (val, def) => typeof val === 'boolean' ? val : def;


module.exports = {
    command: (selector, options = {}) => {
        const verbose = getBool(options?.verbose, false);
        const moveTo = getBool(options?.moveTo, true);
        const waitUntilVisible = getBool(options?.waitUntilVisible, true);

        const beforeTimeout = options?.timeout?.before || 0;
        const afterTimeout = options?.timeout?.after || 0;

        verbose && console.log('selector typeof', typeof selector)

        const elem = typeof selector === 'string' ? element(selector) : selector;

        if (waitUntilVisible) {
            verbose && console.log('[clickExtended : waitForElementVisible (' + String(elem) + ')]')
            browser.waitForElementVisible(elem);
        }

        if (!isNaN(beforeTimeout) && beforeTimeout > 0) {
            verbose && console.log('[clickExtended : beforeTimeout (' + String(beforeTimeout) + ')]')
            browser.pause(beforeTimeout);
        }

        if (moveTo) {
            verbose && console.log('[clickExtended : moveToElement ]')
            browser.moveToElement(elem, 0, 0)
        }

        browser.click(elem);

        if (!isNaN(afterTimeout) && afterTimeout > 0) {
            verbose && console.log('[clickExtended : afterTimeout (' + String(afterTimeout) + ')]')
            browser.pause(afterTimeout);
        }

        return browser;
    }
};