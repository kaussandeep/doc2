exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./test/firstTest.spec.js'],
    multiCapabilities: [{
        'browserName': 'chrome'
    }, 
    {
        'browserName': 'firefox'
    }]

};