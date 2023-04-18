describe("modify device dimensions", function () {
  const todoElement = element('textarea[name="q"]');
  const searchButton = element('input[name="btnK"]');

  const verbose = true;

  const clickOptionsDemo = {
    waitUntilVisible: false, // Waiting for it
    moveTo: true, // Scroll to it
    timeout: {
      before: 1000, // pre-click timeout
      after: 2500, // post-click timeout
    },
    verbose, // Enable console logging
  };

  it("modifies the device dimensions and then resets it", function () {
    browser
      .setDeviceDimensions({
        width: 400,
        height: 600,
        deviceScaleFactor: 50,
        mobile: true,
      })
      .navigateTo("https://www.google.com")
      .pause(100)
      .setDeviceDimensions() // resets the device dimensions
      .navigateTo("https://www.google.com")
      .pause(100)
      .sendKeys(todoElement, "what is nightwatch?")
      .clickExtended(searchButton, clickOptionsDemo)
      .clickExtended('div[jscontroller="w4UyN"]', {
        waitUntilVisible: true,
        timeout: { before: 0, after: 1000 },
        verbose,
      })
      .clickExtended('span[jsaction="UVNdjb"]', {
        waitUntilVisible: false,
        moveTo: false,
      })
      .clickExtended('div[id="hdtb-tls"]', { verbose })
      .pause(100);
  });
});
