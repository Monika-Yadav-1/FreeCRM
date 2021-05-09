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

public class View_Edit_Delete_Deal 
{
	WebDriver driver;
	
	@Test
	@Given("^User navigates to Login page$")
	public void user_navigates_to_Login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);     
	}

	
	@Test(priority=1)
	@When("^User Enters valid credentials$")
	public void user_Enters_valid_credentials() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
		Thread.sleep(4000);    
	}

	
	@Test(priority=2)
	@When("^User selects Deals section from sidebar menu$")
	public void user_selects_Deals_section_from_sidebar_menu() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clickdeal();
		Thread.sleep(3000);	
		test.dashboard();    
	}

	
	@Test(priority=3)
	@Then("^User should be redirected to Deals dashboard$")
	public void user_should_be_redirected_to_Deals_dashboard() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		Thread.sleep(5000);      
	}

	
	@Test(priority=4)
	@When("^User selects the deal from dashboard by clicking on view icon$")
	public void user_selects_the_deal_from_dashboard_by_clicking_on_view_icon() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
	    test.clickviewButton();      
	}

	
	@Test(priority=5)
	@Then("^Existing deal should be visible with all details$")
	public void existing_deal_should_be_visible_with_all_details() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
	    Thread.sleep(3000);  
	    driver.close(); 
	}

	
	@Test(priority=6)
	@When("^User selects the deal from dashboard by clicking on edit icon$")
	public void user_selects_the_deal_from_dashboard_by_clicking_on_edit_icon() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
	    test.clickeditButton();  
	}

	
	@Test(priority=7)
	@Then("^User should be able to edit the deal$")
	public void user_should_be_able_to_edit_the_deal() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
		Thread.sleep(3000);  
	    driver.close();   
	}

	
	@Test(priority=8)
	@When("^User selects the deal from dashboard by clicking on delete icon$")
	public void user_selects_the_deal_from_dashboard_by_clicking_on_delete_icon() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
	    test.clickdeleteButton();
	    Thread.sleep(3000);
	    test.clickdeleteButtonAlert();
	    Thread.sleep(3000);
	}

	
	@Test(priority=10)
	@Then("^User should be able to see deal in bin$")
	public void user_should_be_able_to_see_deal_in_bin() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
	    test.clickBinButton();
	    Thread.sleep(2000);
	    test.clickBinDealsButton();
	    Thread.sleep(4000);
	    driver.close();
	}


}
