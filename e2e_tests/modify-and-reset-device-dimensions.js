describe('modify device dimensions', function () {
    it('modifies the device dimensions and then resets it', function () {
        browser
            .setDeviceDimensions({
                width: 400,
                height: 600,
                deviceScaleFactor: 50,
                mobile: true
            })
            .navigateTo('https://www.google.com')
            .pause(1000)
            .setDeviceDimensions()  // resets the device dimensions
            .navigateTo('https://www.google.com')
            .pause(1000);
    });
});