Feature: Validate Pipeline functionality
Description: Testing pipeline option from dashboard

Background: User is logged in
Given User navigates to the Login page
When User enters valid login credential
And User selects Pipeline option from Deals section
Then User should be redirected to Pipeline page


@Pipeline1
Scenario: Creating Pipeline report
When User fills all the details and clicks on save
Then User should be redirected to Deals Pipeline page and validation message should display


@Pipeline2
Scenario: Viewing an existing Pipeline report
When User selects a particular deal from Pipeline drop down menu
Then User should be redirected to Deals Pipeline page