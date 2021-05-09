package StepDefinition;

import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import POM.DealModulePOM;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidCases 
{

	WebDriver driver;
	
	@Test
	@Given("^User goes to the Login page$")
	public void user_goes_to_the_Login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);    
	}

	
	@Test(priority=1)
	@When("^User enters email id and password$")
	public void user_enters_email_id_and_password() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
		Thread.sleep(4000);	    
	}

	
	@Test(priority=2)
	@Then("^User should be logged in and go to the Deals section$")
	public void user_should_be_logged_in_and_go_to_the_Deals_section() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clickdeal();
		Thread.sleep(3000);	
		test.dashboard();
		Thread.sleep(5000);
		test.clickcreate();
		Thread.sleep(5000);    
	}

	
	@Test(priority=3)
	@When("^User fills invalid values in ([^\\\"]*)$")
	public void user_fills_invalid_values_in(String arg1) throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clicktitle(arg1);
		test.clicksave();
	}

	
	@Test(priority=4)
	@Then("^New Deal should not be created$")
	public void new_Deal_should_not_be_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		boolean b = test.displayerror();
		assertTrue(b);	
	}


	@Test(priority=5)
	@When("^user fills invalid values in the ([^\\\"]*)$")
	public void user_fills_invalid_values_in_the(String arg2) throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clicktitle("Abcd");
		test.companyName(arg2);
		test.clicksave();
	}

	
	@Test(priority=6)
	@Then("^A new Deal should not be created$")
	public void a_new_Deal_should_not_be_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		boolean b = test.displayerror();
		assertTrue(b);  
	}
	
	
	@Test(priority=7)
	@When("^user fills the invalid values in ([^\\\"]*)$")
	public void user_fills_the_invalid_values_in(String arg3) throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clicktitle("Xyz");
		test.productName(arg3);
		test.clicksave();
	}

	
	@Test(priority=8)
	@Then("^No new deal should be created$")
	public void no_new_deal_should_be_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		boolean b = test.displayerror();
		assertTrue(b);
	}
	
}
