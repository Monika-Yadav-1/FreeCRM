package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src/test/resources/Feature/InvalidCases.feature",glue= {"StepDefinition"},tags= {"@Create1"})

public class Test 
{

}
