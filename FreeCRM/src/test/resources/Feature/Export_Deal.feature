Feature: Validate Export functionality
Description: Testing export option from dashboard

Background: User is logged in
Given User navigates to login page
When User enters valid credentials
And User selects Deals section from sidebar menu
Then User should be redirected to Deals dashboard

Scenario: Exporting Deals 
When User selects deals from dashboard and clicks on export option
Then Deals should be exported to documents section
