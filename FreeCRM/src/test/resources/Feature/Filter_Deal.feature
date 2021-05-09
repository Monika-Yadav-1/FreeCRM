Feature: Validate Filter functionality
Description: Testing filter option from dashboard

Background: User is logged in
Given User navigates to login page
When User enters valid login credentials
And User selects Show Filter option from Deals section
Then User should be redirected to Filter dashboard


@Filter1
Scenario: Filtering deals using single parameter row
When User selects title, operator and vlaue fields 
Then Deals should be filtered accordingly and displayed


@Filter2
Scenario: Clearing filters 
When User clicks on clear icon from dashboard
Then User should get redirected to deals dashboard
