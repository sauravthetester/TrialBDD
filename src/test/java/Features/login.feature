Feature: Facebook Check Title and New Page button

Background: User is logged in
Given initiate
Given user is already on login page
When title of the login page is Facebook - log in or sign up
Then username and password entered
|	username					|	password	|
|	sampletest90998@gmail.com	|	Abc123@#	|
Then user clicks submit
When user is on home page


@include
Scenario: Facebook Scenario1

When the title of page is
|id				|title					|
|Messenger		|Messenger				|
|Pages			|Discover				|
Then close the browser

@include
Scenario: Facebook Scenario2

When clicked on pages
And create new page button is available
Then close the browser