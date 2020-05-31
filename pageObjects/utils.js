const EC = protractor.ExpectedConditions;
const timeout = 10000;

class utils{
async get(URL){
await browser.get(URL, timeout);

}
}
module.exports = utils;