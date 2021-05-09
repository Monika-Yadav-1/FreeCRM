Feature: Invalid testscases 
Description: Testing invalid functionality

Background: User is logged in
Given User goes to the Login page
When User enters email id and password
Then User should be logged in and go to the Deals section


@Invalid1
Scenario Outline: Invalid data 
When User fills invalid values in <title> 
Then New Deal should not be created 

Examples:
|title|
|Abc @ 123|																	
|  123|														


@Invalid2
Scenario Outline: Invalid data 
When user fills invalid values in the <company> 
Then A new Deal should not be created 

Examples:
|company|
|Capgeminiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii|																	
|Capg123$%^|			


@Invalid3
Scenario Outline: Invalid data 
When user fills the invalid values in <products> 
Then No new deal should be created 

Examples:
|products|
|1+2=3|																	
|-abc123|	