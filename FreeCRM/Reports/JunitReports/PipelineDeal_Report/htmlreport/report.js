$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Pipeline_Deal.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Pipeline functionality",
  "description": "Description: Testing pipeline option from dashboard",
  "id": "validate-pipeline-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid login credential",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects Pipeline option from Deals section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be redirected to Pipeline page",
  "keyword": "Then "
});
formatter.match({
  "location": "Pipeline_Deal.user_navigates_to_the_Login_page()"
});
formatter.result({
  "duration": 4273020400,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_enters_valid_login_credential()"
});
formatter.result({
  "duration": 947305300,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_selects_Pipeline_option_from_Deals_section()"
});
formatter.result({
  "duration": 7080127700,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Pipeline_page()"
});
formatter.result({
  "duration": 3020025200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Creating Pipeline report",
  "description": "",
  "id": "validate-pipeline-functionality;creating-pipeline-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Pipeline1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User fills all the details and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should be redirected to Deals Pipeline page and validation message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "Pipeline_Deal.user_fills_all_the_details_and_clicks_on_save()"
});
formatter.result({
  "duration": 14641077500,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Deals_Pipeline_page_and_validation_message_should_display()"
});
formatter.result({
  "duration": 82897000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid login credential",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects Pipeline option from Deals section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be redirected to Pipeline page",
  "keyword": "Then "
});
formatter.match({
  "location": "Pipeline_Deal.user_navigates_to_the_Login_page()"
});
formatter.result({
  "duration": 3429562300,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_enters_valid_login_credential()"
});
formatter.result({
  "duration": 1172615400,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_selects_Pipeline_option_from_Deals_section()"
});
formatter.result({
  "duration": 7043558700,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Pipeline_page()"
});
formatter.result({
  "duration": 3004229600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Viewing an existing Pipeline report",
  "description": "",
  "id": "validate-pipeline-functionality;viewing-an-existing-pipeline-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Pipeline2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User selects a particular deal from Pipeline drop down menu",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should be redirected to Deals Pipeline page",
  "keyword": "Then "
});
formatter.match({
  "location": "Pipeline_Deal.user_selects_a_particular_deal_from_Pipeline_drop_down_menu()"
});
formatter.result({
  "duration": 5160037900,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Deals_Pipeline_page()"
});
formatter.result({
  "duration": 76914100,
  "status": "passed"
});
});