Feature: Login functionality
  As a user
  I want to log in to the application
  So that I can access the dashboard

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter a valid "tomsmith" and "SuperSecretPassword!"
    And I click on the login button