Feature: Validate Export functionality
Description: Testing export option from dashboard

Background: User is logged in
Given User goes to login page
When User enters valid credential
And User selects deals section from sidebar menu
Then User should be redirected to the Deals dashboard


@Export
Scenario: Exporting Deals 
When User selects deals from dashboard and clicks on export option
Then Deals should be exported to documents section
