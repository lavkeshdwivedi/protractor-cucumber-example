Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I go to "https://angular.io"
        Then I should be able to navigate the website
    
    Scenario: Hello world!
        Given I type "Hello World!"
        Then the test should succeed