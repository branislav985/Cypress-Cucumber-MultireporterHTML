Feature: Login to application

As valid user
I want to log in into application

Scenario: Valid login
 Given I open login page
 When I submit login
 Then I should see homepage