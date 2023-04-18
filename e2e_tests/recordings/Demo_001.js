describe("Demo_001", function () {
  it("tests Demo_001", function () {
    browser
      .navigateTo(
        "https://www.google.com/search?q=nightwatch+export+test+extension&rlz=1C1GCEA_enRS1004RS1005&oq=&aqs=chrome.0.69i59i450l2.218397361j0j15&sourceid=chrome&ie=UTF-8"
      )
      .windowSize("current", 1280, 720)
      .clickExtended(
        "#rso > div:nth-of-type(2) > div > div > div:nth-of-type(1) h3",
        {}
      )
      .clickExtended("button.vwo-survey-minimize path", {})
      .clickExtended("ul:nth-of-type(4) a", {})
      .clickExtended("div.e-f-Ln > a:nth-of-type(2)", {})
      .clickExtended("div.F-k span:nth-of-type(2)", {})
      .end();
  });
});
