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
Scenario: Facebook Scenario1

When the title of page is
|id				|title					|
|Messenger		|Messenger				|
|Marketplace	|Facebook Marketplace	|
Then close the browser

@thistag
Scenario: Facebook Scenario2

When clicked on pages
And create new page button is available
Then close the browser