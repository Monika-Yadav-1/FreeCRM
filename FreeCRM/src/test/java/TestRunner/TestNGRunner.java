package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/resources/Feature/InvalidCases.feature",glue= {"StepDefinition"},
plugin= {"pretty","html:TestngReports/InvalidCases_Report/htmlreport",
		"json:TestngReports/InvalidCases_Report/jsonreport.json",
		"junit:TestngReports/InvalidCases_Report/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:TestngReports/InvalidCases_Report/cucumber-reports/report.html"})

public class TestNGRunner  extends AbstractTestNGCucumberTests
{
}


