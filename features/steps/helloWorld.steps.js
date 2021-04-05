let { Given, Then } = require('cucumber');

Given('I type {string}', function (typedString) {
    return console.log("You typed " + typedString);
});

Then('the test should succeed', function () {
    return console.log("Bravo! the test is succeeded.");
});
