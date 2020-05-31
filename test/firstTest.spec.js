const EC = protractor.ExpectedConditions;
const fs = require('fs');

const pageObject = require('../pageObjects/utils.js');

describe('Doctrine tests', () => {

  it('Open URL and save details to a file', async () => {
    
    const page = new pageObject();
    browser.ignoreSynchronization = true;
    await page.get('https://career.doctrin.se/people');
    await browser.wait(EC.visibilityOf(element(By.className('name'))), 5000, 'Page not loaded');
    var employeeList = [];
    element.all(By.className('name u-link-color')).getText().then((employeeName) => {
      employeeList.push({
        employeeName: employeeName,
      });
      var jsonText =JSON.stringify(employeeList);
      let txtFile = "test.text";
      fs.writeFileSync(txtFile, jsonText);

    });
  
    element.all(By.className('title')).getText().then((title) => {
      employeeList.push({
        employeeDesignation: title,
      });
      var jsonText =JSON.stringify(employeeList);
      let txtFile = "test.text";
      fs.writeFileSync(txtFile, jsonText);
 
    });


  });


});