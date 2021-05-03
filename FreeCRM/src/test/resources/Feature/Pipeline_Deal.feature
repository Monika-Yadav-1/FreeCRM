Feature: Validate Pipeline functionality
Description: Testing pipeline option from dashboard

Background: User is logged in
Given User navigates to login page
When User enters valid credentials
And User selects Pipeline option from Deals section
Then User should be redirected to Pipeline page

Scenario: Creating Pipeline report
When User clicks on Pipeline option from deals dashboard
And Fills all the details and clicks on save
Then User should be redirected to Deals Pipeline page and validation message should display

Scenario: Viewing an existing Pipeline report
When User selects a particular deal from Pipeline drop down menu
Then User should be redirected to Deals Pipeline page