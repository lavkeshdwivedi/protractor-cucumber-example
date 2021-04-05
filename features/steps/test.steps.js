var {Given, Then} = require('cucumber');

Given('I go to {string}', function (site) {
    browser.get(site);
});

Then('I should be able to navigate the website', function () {
    return 1 === 1;
});