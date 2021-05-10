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
  "duration": 8606394600,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_enters_valid_login_credential()"
});
formatter.result({
  "duration": 13739391300,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_selects_Pipeline_option_from_Deals_section()"
});
formatter.result({
  "duration": 7739277500,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Pipeline_page()"
});
formatter.result({
  "duration": 3012903700,
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
  "duration": 14658820200,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Deals_Pipeline_page_and_validation_message_should_display()"
});
formatter.result({
  "duration": 74421100,
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
  "duration": 8170332100,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_enters_valid_login_credential()"
});
formatter.result({
  "duration": 14081274900,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_selects_Pipeline_option_from_Deals_section()"
});
formatter.result({
  "duration": 7021277000,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Pipeline_page()"
});
formatter.result({
  "duration": 3003160100,
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
  "duration": 5180528100,
  "status": "passed"
});
formatter.match({
  "location": "Pipeline_Deal.user_should_be_redirected_to_Deals_Pipeline_page()"
});
formatter.result({
  "duration": 71709200,
  "status": "passed"
});
});