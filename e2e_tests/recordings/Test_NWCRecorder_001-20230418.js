describe('Test_NWCRecorder_001-20230418', function () {
  it('tests Test_NWCRecorder_001-20230418', function (browser) {
    browser
      .windowRect({ width: 1858, height: 1009 })
      .navigateTo(
        'https://chrome.google.com/webstore/detail/testcase-studio/loopjjegnlccnhgfehekecpanpmielcj'
      )
      .click('div.O-j-k h1')
      .click('#searchbox-input')
      .setValue('#searchbox-input', 'nightwatch')
      .perform(function () {
        const actions = this.actions({ async: true });

        return actions.keyDown(this.Keys.ENTER);
      })
      .perform(function () {
        const actions = this.actions({ async: true });

        return actions.keyUp(this.Keys.ENTER);
      })
      .click('div.n-j-Z-Dc > a:nth-of-type(1)')
      .click(
        'div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) div.a-d-l-L'
      )
      .end();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHGNGTBUB
