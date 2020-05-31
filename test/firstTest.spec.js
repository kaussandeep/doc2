const EC = protractor.ExpectedConditions;
const fs = require('fs');
XLSX = require('xlsx');
const pageObject = require('../pageObjects/utils.js');

describe('Doctrine tests', () => {
  
    it('Open URL and save details to a file', async() => {
      const page = new pageObject();
      browser.ignoreSynchronization = true;    
      await page.get('https://career.doctrin.se/people');
    await browser.wait(EC.visibilityOf(element(By.className('name'))), 5000,'Page not loaded');
  var foo = element(By.xpath('//*[@id="top"]/section[3]/div/div/ul/li[1]/a/span[1]')).getText().then((test) => {
 console.log(test);
 expect(test).toEqual('Anders Fjeldstad');
 
let txtFile = "test.txt";
fs.writeFileSync(txtFile, test);
   } );



 //// let txtFile = "test.txt";
//fs.writeFileSync(txtFile, foo);
    // expect(foo.getText()).toEqual('Afnders Fjeldstad');
     
  
      
    });
    

});