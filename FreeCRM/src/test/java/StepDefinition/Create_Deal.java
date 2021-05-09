package StepDefinition;

import java.io.File;
import java.io.FileInputStream;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
//import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import POM.DealModulePOM;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Create_Deal 
{
	 WebDriver driver;
	
	@Test
	@Given("^User navigates to the login page$")
	public void user_navigates_to_the_login_page() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(15, TimeUnit.SECONDS);
	}

	
	@Test(priority=1)
	@When("^User enters the valid credentials$")
	public void user_enters_the_valid_credentials() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);  
		test.inputemail("generic.work.related@gmail.com");
		test.inputpassword("Abcd@1234");
		test.clicklogin();
		Thread.sleep(4000);	
	}

	
	@Test(priority=2)
	@Then("^User should be logged in and go to the deals section$")
	public void user_should_be_logged_in_and_go_to_the_deals_section() throws Throwable 
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
	@When("^User enters valid title name and clicks on save$")
	public void user_enters_valid_title_name_and_clicks_on_save() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		test.clicktitle("Deal 1");
		Thread.sleep(3000);
		test.clicksave();
		Thread.sleep(3000);    
	}

	
	@Test(priority=4)
	@Then("^New deal is created$")
	public void new_deal_is_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
		test.clickdeal(); 
		test.dashboard();
		Thread.sleep(3000);
	}

	
	@Test(priority=5)
	@When("^User leaves the title field blank and clicks on save$")
	public void user_leaves_the_title_field_blank_and_clicks_on_save() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
	    test.clicktitle("");
	    Thread.sleep(3000);
	    test.clicksave();
	}

	
	@Test(priority=6)
	@Then("^Error message should be displayed on saving$")
	public void error_message_should_be_displayed_on_saving() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
		Thread.sleep(3000);
		driver.close();    
	}

	
	@Test(priority=7)
	@When("^User enters values in the fields and clicks on save$")
	public void user_enters_values_in_the_fields_and_clicks_on_save() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class); 
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
	    test.clicktitle("Deal 2");
	    Thread.sleep(3000);
	    test.clickprivate();
	    test.clickaccessdropdown();
	    Thread.sleep(3000);
	    test.clickaccess();
	    test.clickassigndropdown();
	    Thread.sleep(3000);
	    test.clickassign();
	    Thread.sleep(3000);
	    test.companyName("Frito-Lay");
	    Thread.sleep(3000);
	    test.clickcalendar();
	    Thread.sleep(3000);
	    test.selectcalendar();
	    test.closecalendar();
	    Thread.sleep(3000);
	    test.productName("Potato Chips");
	    Thread.sleep(3000);
	    test.contactName("abc");
	    Thread.sleep(3000);
	    test.inputdescription("This is a new Deal");
	    test.inputprobability("50");
	    Thread.sleep(3000);
	    test.inputamount("1000");
	    test.inputcommission("125.50");
	    Thread.sleep(3000);
	    test.clickstage();
	    test.selectstage();
	    Thread.sleep(3000);
	    test.clickstatus();
	    test.selectstatus();
	    Thread.sleep(3000);
	    test.inputnextsteps("Complete all operations");
	    Thread.sleep(3000);
	    test.clicktype();
	    test.selecttype();
	    Thread.sleep(3000);
	    test.clicksource();
	    test.selectsource();
	    Thread.sleep(2000);
	}

	
	@Test(priority=8)
	@Then("^New deal should be created$")
	public void new_deal_should_be_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);  
	    test.clicksave();
	    Thread.sleep(2000);
	    driver.close();
	}

	
	@Test(priority=9)
	@When("^User fills all text fields and clicks on save$")
	public void user_fills_all_text_fields_and_clicks_on_save() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
		File credentials=new File("C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumWebDriver\\Data.xlsx");
        FileInputStream fis = new FileInputStream(credentials);
        XSSFWorkbook wb = new XSSFWorkbook(fis);
        XSSFSheet sheet1 = wb.getSheetAt(0);
       
        String title=sheet1.getRow(1).getCell(0).getStringCellValue();
        test.clicktitle(title);
		String desc=sheet1.getRow(1).getCell(1).getStringCellValue();
		test.inputdescription(desc);
		String amount=sheet1.getRow(1).getCell(2).toString();
		test.inputamount(amount);
		String commission=sheet1.getRow(1).getCell(3).toString();
		test.inputcommission(commission);
		String nextsteps=sheet1.getRow(1).getCell(4).toString();
		test.inputnextsteps(nextsteps);
		
	}

	
	@Test(priority=10)
	@Then("^A new deal should be created$")
	public void a_new_deal_should_be_created() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);
		Thread.sleep(3000);
		test.clicksave();
	}
	

	@Test(priority=11)
	@When("^User fills the fields and clicks on cancel$")
	public void user_fills_the_fields_and_clicks_on_cancel() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
		test.clicktitle("Deal 2");
	    Thread.sleep(3000);
	    test.clickprivate();
	    test.clickaccessdropdown();
	    Thread.sleep(3000);
	    test.clickaccess();
	    test.clickassigndropdown();
	    Thread.sleep(3000);
	    test.clickassign();
	    Thread.sleep(3000);
	    test.clickcalendar();
	    Thread.sleep(3000);
	    test.selectcalendar();
	    test.closecalendar();
	    Thread.sleep(3000);
	    test.inputdescription("This is a new Deal");
	    test.inputprobability("50");
	    Thread.sleep(3000);
	    test.inputamount("1000");
	    test.inputcommission("125.50");
	    Thread.sleep(3000);
	    test.clickstage();
	    test.selectstage();
	    Thread.sleep(3000);
	    test.clickstatus();
	    test.selectstatus();
	    Thread.sleep(3000);
	    test.inputnextsteps("Complete all operations");
	    Thread.sleep(3000);
	    test.clicktype();
	    test.selecttype();
	    Thread.sleep(3000);
	    test.clicksource();
	    test.selectsource();
	    Thread.sleep(2000);  
	}

	
	@Test(priority=12)
	@Then("^All fields should clear and deal should not be saved$")
	public void all_fields_should_clear_and_deal_should_not_be_saved() throws Throwable 
	{
		DealModulePOM test=PageFactory.initElements(driver,DealModulePOM.class);   
	    test.clickcancel();
	    Thread.sleep(3000);
	    driver.close();
	}
	

}
