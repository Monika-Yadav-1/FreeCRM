package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features ="src/test/resources/Feature/InvalidCases.feature",glue= {"StepDefinition"},plugin= {"pretty","html:TestNGReports/InvalidCases_Report/htmlreport","json:TestNGReports/InvalidCases_Report/jsonreport.json","junit:TestNGReports/InvalidCases_Report/xmlreport.xml"},monochrome=true)

public class TestNGRunner  extends AbstractTestNGCucumberTests
{
}


