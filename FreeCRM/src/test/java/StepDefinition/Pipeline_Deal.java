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

public class Pipeline_Deal 
{
	WebDriver driver;
	
	@Test
	@Given("^User navigates to the Login page$")
	public void user_navigates_to_the_Login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS); 
	}

	
	@Test(priority=1)
	@When("^User enters valid login credential$")
	public void user_enters_valid_login_credential() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
	}
	
	
	@Test(priority=2)
	@When("^User selects Pipeline option from Deals section$")
	public void user_selects_Pipeline_option_from_Deals_section() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    test.clickdeal();
	    Thread.sleep(3000);	
	    test.dashboard();
	    Thread.sleep(3000);  
	}

	
	@Test(priority=3)
	@Then("^User should be redirected to Pipeline page$")
	public void user_should_be_redirected_to_Pipeline_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		Thread.sleep(3000);
	}

	
	@Test(priority=4)
	@When("^User fills all the details and clicks on save$")
	public void user_fills_all_the_details_and_clicks_on_save() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clickpipeline();
		Thread.sleep(3000);
		test.clickpipelinefield();
		Thread.sleep(3000);
		test.selectpipelineoption();
		Thread.sleep(2000);
		test.selectplusbutton();
		Thread.sleep(2000);
		test.inputpipelinename("Pipeline report");
		Thread.sleep(2000);
		test.clickpipelinecreate(); 
		Thread.sleep(2000);
	}

	
	@Test(priority=6)
	@Then("^User should be redirected to Deals Pipeline page and validation message should display$")
	public void user_should_be_redirected_to_Deals_Pipeline_page_and_validation_message_should_display() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.close(); 
	}

	
	@Test(priority=7)
	@When("^User selects a particular deal from Pipeline drop down menu$")
	public void user_selects_a_particular_deal_from_Pipeline_drop_down_menu() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		test.clickpipelineselect();
		Thread.sleep(2000);
		test.selectpipelinenamefromdd();
		Thread.sleep(3000); 
	}

	
	@Test(priority=8)
	@Then("^User should be redirected to Deals Pipeline page$")
	public void user_should_be_redirected_to_Deals_Pipeline_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.close(); 
	}

}
