Feature: Validate Create Deal functionality
Description: Testing create option from dashboard

Background: User is logged in
Given User navigates to the login page
When User enters the valid credentials
Then User should be logged in and go to the deals section


@Create1
Scenario: User fills all the required fields									
When User enters valid title name and clicks on save
Then New deal is created


@Create2
Scenario: User leaves the required fields blank
When User leaves the title field blank and clicks on save
Then Error message should be displayed on saving


@Create3
Scenario: User enters valid data 
When User enters values in the fields and clicks on save
Then New deal should be created 


@Create4
Scenario: User fetches data from excel sheet
When User fills all text fields and clicks on save
Then  A new deal should be created


@Create5
Scenario: User cancels the deal
When User fills the fields and clicks on cancel
Then All fields should clear and deal should not be saved
