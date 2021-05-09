$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Create_Deal.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Create Deal functionality",
  "description": "Description: Testing create option from dashboard",
  "id": "validate-create-deal-functionality",
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
  "name": "User navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 6780297800,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 7876481100,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 17234527100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User fills all the required fields",
  "description": "",
  "id": "validate-create-deal-functionality;user-fills-all-the-required-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Create1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters valid title name and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "New deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_enters_valid_title_name_and_clicks_on_save()"
});
formatter.result({
  "duration": 6259484200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.new_deal_is_created()"
});
formatter.result({
  "duration": 3162016400,
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
  "name": "User navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 6444862000,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 19071630200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13319013400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User leaves the required fields blank",
  "description": "",
  "id": "validate-create-deal-functionality;user-leaves-the-required-fields-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Create2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User leaves the title field blank and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Error message should be displayed on saving",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_leaves_the_title_field_blank_and_clicks_on_save()"
});
formatter.result({
  "duration": 3121255200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.error_message_should_be_displayed_on_saving()"
});
formatter.result({
  "duration": 3089837300,
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
  "name": "User navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 6080762500,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 15945769500,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13294084500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User enters valid data",
  "description": "",
  "id": "validate-create-deal-functionality;user-enters-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Create3"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User enters values in the fields and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "New deal should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_enters_values_in_the_fields_and_clicks_on_save()"
});
formatter.result({
  "duration": 49349115500,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.new_deal_should_be_created()"
});
formatter.result({
  "duration": 2153069500,
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
  "name": "User navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 5910463700,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 15389011400,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13290016300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User fetches data from excel sheet",
  "description": "",
  "id": "validate-create-deal-functionality;user-fetches-data-from-excel-sheet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Create4"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User fills all text fields and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "A new deal should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_fills_all_text_fields_and_clicks_on_save()"
});
formatter.result({
  "duration": 1890450000,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.a_new_deal_should_be_created()"
});
formatter.result({
  "duration": 32000,
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
  "name": "User navigates to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in and go to the deals section",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_navigates_to_the_login_page()"
});
formatter.result({
  "duration": 6367373900,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 7750866300,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13286056500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User cancels the deal",
  "description": "",
  "id": "validate-create-deal-functionality;user-cancels-the-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Create5"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User fills the fields and clicks on cancel",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "All fields should clear and deal should not be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_fills_the_fields_and_clicks_on_cancel()"
});
formatter.result({
  "duration": 39898963600,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.all_fields_should_clear_and_deal_should_not_be_saved()"
});
formatter.result({
  "duration": 3198559900,
  "status": "passed"
});
});