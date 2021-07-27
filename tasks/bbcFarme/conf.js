exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: ['tests/**/*.test.js'],
    
    directConnect: true,
    
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080']
        }
    }
}