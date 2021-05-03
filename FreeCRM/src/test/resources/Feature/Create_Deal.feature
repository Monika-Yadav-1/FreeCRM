Feature: Validate Create Deal functionality
Description: Testing create option from dashboard

Background: User is logged in
Given User navigates to login page
When User enters valid credentials
And User selects Create option from Deals section
Then User should be redirected to Create deal page

Scenario Outline: Verify Title functionality using valid name									
When User enters valid <title> name and clicks on save
Then New deal is created
Examples:
|title		|
|Title_01	|
|Title@1	|

Scenario: Verify Title functionality by leaving it blank
When User leaves the title field blank and clicks on save
Then Error message should be displayed on saving

Scenario: Verify Access functionality 
When User sets access type to private
Then User should be able to select usernames from drop down menu

Scenario: Verify Close Date functionality by selecting only date  
When User selects only date from drop down menu
Then Selected date and default time should be displayed in the field

Scenario: Verify Close Date functionality by selecting date and time 
When User selects both date and time from drop down menu
Then Selected date and time should be displayed in the field

Scenario: Verify Assigned To functionality 
When User clicks on drop down menu
Then Selected username should be displayed in the field

Scenario: Verify Probability functionality 														
When User enters probability more than 100
Then Error message should be displayed on saving

Scenario Outline: Verify Amount and Commission functionality 														
When User enters valid <amount> and <commission> and clicks on save
Then New deal should be created
Examples:
|amount	|commission	|
|0	|500	|
|1000	|1500.5	|

Scenario: Verify Status functionality 
When User clicks on drop down menu
Then Selected username should be displayed in the field

Scenario: Verify Type functionality 
When User clicks on drop down menu
Then Selected username should be displayed in the field

Scenario: Verify Source functionality 
When User clicks on drop down menu
Then Selected username should be displayed in the field

Scenario: Verify Clear functionality 
When User clicks on clear option on the page
Then All fields should clear and deal should not be saved
