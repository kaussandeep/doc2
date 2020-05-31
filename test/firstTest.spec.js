const EC = protractor.ExpectedConditions;
const fs = require('fs');

const pageObject = require('../pageObjects/utils.js');

describe('Doctrine tests', () => {

  it('Open URL and save details to a file', async () => {
    debugger;
    const page = new pageObject();
    browser.ignoreSynchronization = true;
    await page.get('https://career.doctrin.se/people');
    await browser.wait(EC.visibilityOf(element(By.className('name'))), 5000, 'Page not loaded');

    element.all(By.className('section-padding employees-list')).getText().then((test) => {

      let txtFile = "test.json";
      //let jsonStr = JSON.parse('{test}');
      fs.writeFileSync(txtFile, test);

    });


  });


});