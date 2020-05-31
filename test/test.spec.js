XLSX = require('xlsx');
const fs = require('fs');
describe('sample test', function(){
var workbook;
var worksheet;
beforeAll(function _setupStart() {
//Initialize workbook to read the existing excel assuming it has a sheet named 'urls'
workbook = XLSX.readFile('test.xlsx');
worksheet = workbook.Sheets['urls'];
});
it('Sample Check', function(){
browser.get("http://www.protractortest.org/#/");
browser.sleep(5000);

browser.getCurrentUrl().then(function(valueUrl){
//set the value here



let txtFile = "test.txt";
fs.writeFileSync(txtFile, valueUrl);
//console.log(str);

})
});
afterAll(function _finish() {
//Write the changes back
XLSX.writeFile(workbook, 'test.xlsx');
});
});