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

public class Filter_Deal 
{
	WebDriver driver;
	
	@Test
	@Given("^User navigates to login page$")
	public void user_navigates_to_login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);   
	}

	
	@Test(priority=1)
	@When("^User enters valid login credentials$")
	public void user_enters_valid_login_credentials() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
		Thread.sleep(4000);    
	}

	
	@Test(priority=2)
	@When("^User selects Show Filter option from Deals section$")
	public void user_selects_Show_Filter_option_from_Deals_section() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
	    test.clickdeal();
	    Thread.sleep(3000);	
	    test.clickShowFilterButton();
	}

	
	@Test(priority=3)
	@Then("^User should be redirected to Filter dashboard$")
	public void user_should_be_redirected_to_Filter_dashboard() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
		Thread.sleep(3000);	 
	}

	
	@Test(priority=4)
	@When("^User selects title, operator and vlaue fields$")
	public void user_selects_title_operator_and_vlaue_fields() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
	    test.clickSearchFilter();
	    Thread.sleep(2000);	
	    test.selectSearchOption();
	    Thread.sleep(2000);	
	    test.clickoperatorFilter();
	    Thread.sleep(2000);
	    test.selectOpertatorFilter();
	    Thread.sleep(2000);
	    test.clickValuefilter();
	    Thread.sleep(2000);
	    test.selectValuefilter();
	    Thread.sleep(5000);   
	}

	
	@Test(priority=5)
	@Then("^Deals should be filtered accordingly and displayed$")
	public void deals_should_be_filtered_accordingly_and_displayed() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
		 test.clickfilterSearchButton();
		 Thread.sleep(3000);
		 driver.close();
	}

	
	@Test(priority=6)
	@When("^User clicks on clear icon from dashboard$")
	public void user_clicks_on_clear_icon_from_dashboard() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
		test.clickSearchFilter();
	    Thread.sleep(2000);	
	    test.selectSearchOption();
	    Thread.sleep(2000);	
	    test.clickoperatorFilter();
	    Thread.sleep(2000);
	    test.selectOpertatorFilter();
	    Thread.sleep(2000);
	    test.clickValuefilter();
	    Thread.sleep(2000);
	    test.selectValuefilter();
	    Thread.sleep(5000);
	    test.clickfilterClear();
	}

	
	@Test(priority=7)
	@Then("^User should get redirected to deals dashboard$")
	public void user_should_get_redirected_to_deals_dashboard() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
		 Thread.sleep(3000); 
		 driver.close();
	}
	
}
