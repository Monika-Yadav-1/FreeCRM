package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import POM.LoginPagePOM;

public class ValidateLogin 
{
	@Test
	public void testLogin() throws InterruptedException
	{
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver","C:\\Users\\monik\\Desktop\\TRAINING\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
		driver.manage().window().maximize();
		
		LoginPagePOM login=PageFactory.initElements(driver,LoginPagePOM.class);
		Thread.sleep(3000);	
		login.inputemail("monikay2996@gmail.com");
		login.inputpassword("Abcd@1234");
		login.clicklogin();
		
		
	}
}
