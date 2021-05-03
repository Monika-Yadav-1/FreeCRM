Feature: Validate View, Edit and Delete functionality
Description: Testing the view, edit and delete operations from Deals dashoard

Background: User is logged in
Given User navigates to login page
When User enters valid credentials
And User selects Deals section from sidebar menu
Then User should be redirected to Deals dashboard

Scenario: View an existing deal
When User selects the deal from dashboard by clicking on view icon
Then Existing deal should be visible with all details

Scenario: Edit an existing deal
When User selects the deal from dashboard by clicking on edit icon
Then User should be able to edit the deal

Scenario: Delete an existing deal
When User selects the deal from dashboard by clicking on delete icon
Then User should be able to see deal in bin
