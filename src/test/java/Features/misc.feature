Feature: Facebook Login

Background: User is logged in
Given initiate
Given user is already on login page
When title of the login page is Facebook - log in or sign up
Then username and password entered
|	username				|	password	|
|	saurav3046@ymail.com	|	max10000@	|
Then user clicks submit
When user is on home page

@thistag
Scenario: Facebook Scenario3

When name is available
Then close the browser