package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import POM.DealModulePOM;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Export_Deal 
{
	WebDriver driver;
	
	@Test
	@Given("^User goes to login page$")
	public void user_goes_to_login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS); 
	}

	
	@Test(priority=1)
	@When("^User enters valid credential$")
	public void user_enters_valid_credential() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
		Thread.sleep(4000);	
	}

	
	@Test(priority=2)
	@When("^User selects deals section from sidebar menu$")
	public void user_selects_deals_section_from_sidebar_menu() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
		test.clickdeal();
		Thread.sleep(3000);	    
	}

	
	@Test(priority=3)
	@Then("^User should be redirected to the Deals dashboard$")
	public void user_should_be_redirected_to_the_Deals_dashboard() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
		test.dashboard();
		Thread.sleep(5000);  
	}

	
	@Test(priority=4)
	@When("^User selects deals from dashboard and clicks on export option$")
	public void user_selects_deals_from_dashboard_and_clicks_on_export_option() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
	    test.clickexpdeal();
	    Thread.sleep(2000);
	    test.clickexp();
	    Thread.sleep(5000);
	    test.clickexportcnf();
	    Thread.sleep(2000);
	}

	
	@Test(priority=5)
	@Then("^Deals should be exported to documents section$")
	public void deals_should_be_exported_to_documents_section() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
	    test.clickdocument();
	    Thread.sleep(2000);
	    test.dashboard();
	    Thread.sleep(2000);
	    test.clickexportcheck();
	    Thread.sleep(5000);
	    driver.close();
	}


}
