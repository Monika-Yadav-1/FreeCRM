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
  "duration": 4326508100,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 5427299400,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13390700400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User fills all the required fields",
  "description": "",
  "id": "validate-create-deal-functionality;user-fills-all-the-required-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Create1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User enters valid title name and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "New deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_enters_valid_title_name_and_clicks_on_save()"
});
formatter.result({
  "duration": 6294809900,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.new_deal_is_created()"
});
formatter.result({
  "duration": 3217203200,
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
  "duration": 5430117600,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 7309589200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13341955900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User leaves the required fields blank",
  "description": "",
  "id": "validate-create-deal-functionality;user-leaves-the-required-fields-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Create2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User leaves the title field blank and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Error message should be displayed on saving",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_leaves_the_title_field_blank_and_clicks_on_save()"
});
formatter.result({
  "duration": 3139641200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.error_message_should_be_displayed_on_saving()"
});
formatter.result({
  "duration": 3094571200,
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
  "duration": 4253870500,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 5573972000,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13363577700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User enters valid data",
  "description": "",
  "id": "validate-create-deal-functionality;user-enters-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Create3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User enters values in the fields and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "New deal should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_enters_values_in_the_fields_and_clicks_on_save()"
});
formatter.result({
  "duration": 49913947500,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.new_deal_should_be_created()"
});
formatter.result({
  "duration": 2198304500,
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
  "duration": 4559100700,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 5292638800,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13352981900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User fetches data from excel sheet",
  "description": "",
  "id": "validate-create-deal-functionality;user-fetches-data-from-excel-sheet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Create4"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User fills all text fields and clicks on save",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "A new deal should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_fills_all_text_fields_and_clicks_on_save()"
});
formatter.result({
  "duration": 2737186600,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.a_new_deal_should_be_created()"
});
formatter.result({
  "duration": 3096519100,
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
  "duration": 6108328200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_enters_the_valid_credentials()"
});
formatter.result({
  "duration": 6284823200,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.user_should_be_logged_in_and_go_to_the_deals_section()"
});
formatter.result({
  "duration": 13333665500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User cancels the deal",
  "description": "",
  "id": "validate-create-deal-functionality;user-cancels-the-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Create5"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User fills the fields and clicks on cancel",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "All fields should clear and deal should not be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_Deal.user_fills_the_fields_and_clicks_on_cancel()"
});
formatter.result({
  "duration": 40474088100,
  "status": "passed"
});
formatter.match({
  "location": "Create_Deal.all_fields_should_clear_and_deal_should_not_be_saved()"
});
formatter.result({
  "duration": 3207640700,
  "status": "passed"
});
});