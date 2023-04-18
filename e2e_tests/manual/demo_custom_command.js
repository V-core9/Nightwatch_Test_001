describe("modify device dimensions", function () {
  it("modifies the device dimensions and then resets it", () => {
    browser
      .navigateTo("https://www.google.com")
      .windowSize("current", 1280, 720)
      .pause(100)
      .sendKeys('textarea[name="q"]', "what is nightwatch?")
      .clickExtended('input[name="btnK"]', {
        timeout: { before: 1000, after: 2500 },
      })
      .clickExtended('div[jscontroller="w4UyN"]', {
        timeout: { before: 0, after: 1000 },
      })
      .clickExtended('span[jsaction="UVNdjb"]', {})
      .clickExtended('div[id="hdtb-tls"]', {})
      .pause(100)
      .end();
  });
});
