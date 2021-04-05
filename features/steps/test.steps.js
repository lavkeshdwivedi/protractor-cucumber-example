var { Given, Then } = require('cucumber');
let navigatedSite = "";

Given('I go to {string}', function (site) {
    navigatedSite = site;
    browser.get(site);
});

Then('I should be able to navigate the website', function () {
    console.log("The website " + navigatedSite + " is working under a test.");
});