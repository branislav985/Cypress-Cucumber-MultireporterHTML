Feature: Login to application

As valid user
I want to log in into application


Scenario: title
  Given I open login page
 When I submit login "username" and "password"
 Then I should see homepage

 
