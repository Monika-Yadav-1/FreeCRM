$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Filter_Deal.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Filter functionality",
  "description": "Description: Testing filter option from dashboard",
  "id": "validate-filter-functionality",
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
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects Show Filter option from Deals section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be redirected to Filter dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Filter_Deal.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 6555407500,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_enters_valid_login_credentials()"
});
formatter.result({
  "duration": 5594836200,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_selects_Show_Filter_option_from_Deals_section()"
});
formatter.result({
  "duration": 3197566200,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_should_be_redirected_to_Filter_dashboard()"
});
formatter.result({
  "duration": 3012810100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Filtering deals using single parameter row",
  "description": "",
  "id": "validate-filter-functionality;filtering-deals-using-single-parameter-row",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Filter1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User selects title, operator and vlaue fields",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Deals should be filtered accordingly and displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Filter_Deal.user_selects_title_operator_and_vlaue_fields()"
});
formatter.result({
  "duration": 15476790800,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.deals_should_be_filtered_accordingly_and_displayed()"
});
formatter.result({
  "duration": 3184456200,
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
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects Show Filter option from Deals section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be redirected to Filter dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Filter_Deal.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 5967009500,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_enters_valid_login_credentials()"
});
formatter.result({
  "duration": 5146048900,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_selects_Show_Filter_option_from_Deals_section()"
});
formatter.result({
  "duration": 3192885100,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_should_be_redirected_to_Filter_dashboard()"
});
formatter.result({
  "duration": 3001055500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Clearing filters",
  "description": "",
  "id": "validate-filter-functionality;clearing-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Filter2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User clicks on clear icon from dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User should get redirected to deals dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Filter_Deal.user_clicks_on_clear_icon_from_dashboard()"
});
formatter.result({
  "duration": 15483934300,
  "status": "passed"
});
formatter.match({
  "location": "Filter_Deal.user_should_get_redirected_to_deals_dashboard()"
});
formatter.result({
  "duration": 3082045700,
  "status": "passed"
});
});