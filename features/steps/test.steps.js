var { Given, Then, setDefaultTimeout } = require('cucumber');
let navigatedSite = "";
setDefaultTimeout(60 * 1000);

Given('I go to {string}', async function (site) {
    navigatedSite = site;
    browser.driver.get(site);
    browser.driver.manage().window().maximize();
    await browser.driver.sleep(10000);
});

Then('I should be able to navigate the website', function () {
    return console.log("The website " + navigatedSite + " is working under a test.");
});