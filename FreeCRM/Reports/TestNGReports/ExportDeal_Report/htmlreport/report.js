$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Export_Deal.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Export functionality",
  "description": "Description: Testing export option from dashboard",
  "id": "validate-export-functionality",
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
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credential",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects deals section from sidebar menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be redirected to the Deals dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Export_Deal.user_goes_to_login_page()"
});
formatter.result({
  "duration": 7122349800,
  "status": "passed"
});
formatter.match({
  "location": "Export_Deal.user_enters_valid_credential()"
});
formatter.result({
  "duration": 6122863300,
  "status": "passed"
});
formatter.match({
  "location": "Export_Deal.user_selects_deals_section_from_sidebar_menu()"
});
formatter.result({
  "duration": 3094848300,
  "status": "passed"
});
formatter.match({
  "location": "Export_Deal.user_should_be_redirected_to_the_Deals_dashboard()"
});
formatter.result({
  "duration": 5066523100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Exporting Deals",
  "description": "",
  "id": "validate-export-functionality;exporting-deals",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Export"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User selects deals from dashboard and clicks on export option",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Deals should be exported to documents section",
  "keyword": "Then "
});
formatter.match({
  "location": "Export_Deal.user_selects_deals_from_dashboard_and_clicks_on_export_option()"
});
formatter.result({
  "duration": 9254859600,
  "status": "passed"
});
formatter.match({
  "location": "Export_Deal.deals_should_be_exported_to_documents_section()"
});
formatter.result({
  "duration": 9263313100,
  "status": "passed"
});
});